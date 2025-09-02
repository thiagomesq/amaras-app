import { useState } from 'react';
import { createPublicClient, http, decodeFunctionData } from 'viem';
import { polygonAmoy } from 'viem/chains';
import { ENTITY_MANAGER_ADDRESS, ENTITY_MANAGER_ABI } from '@/lib/constants';

// Configuração do cliente PÚBLICO Viem (seguro para o frontend)
const publicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});

export const useEntityManager = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const registerEntity = async (name: string, metadata: string, entityHash: `0x${string}`) => {
    setIsPending(true);
    setError(null);
    try {
      const response = await fetch('/api/register-entity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, metadata, entityHash }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha ao registrar a entidade.');
      }

      setIsPending(false);
      return data.receipt;
    } catch (err) {
      console.error('Erro ao registrar entidade:', err);
      setError(err as Error);
      setIsPending(false);
      throw err;
    }
  };

  const getRecentEntities = async (limit = 5) => {
    try {
      const latestBlock = await publicClient.getBlockNumber();
      const fromBlock = latestBlock > 100 ? BigInt(Number(latestBlock) - 100) : BigInt(0);

      const logs = await publicClient.getLogs({
        address: ENTITY_MANAGER_ADDRESS,
        event: {
          type: 'event',
          name: 'EntityRegistered',
          inputs: [
            { name: 'entityId', type: 'uint256', indexed: true },
            { name: 'orgAddress', type: 'address', indexed: true },
            { name: 'dataHash', type: 'bytes32', indexed: false },
          ],
        },
        fromBlock: fromBlock,
        toBlock: 'latest',
      });

      const recentLogs = logs.slice(-limit).reverse();

      const entities = await Promise.all(
        recentLogs.map(async (log) => {
          const tx = await publicClient.getTransaction({ hash: log.transactionHash! });
          const { args } = decodeFunctionData({
            abi: ENTITY_MANAGER_ABI.abi,
            data: tx.input,
          });

          const name = args && (args[0] as string);
          const entityId = log.args.entityId;

          return { id: entityId, name: name || 'Nome não encontrado' };
        }),
      );

      return entities;
    } catch (err) {
      console.error('Erro ao buscar entidades recentes:', err);
      throw err;
    }
  };

  return { registerEntity, getRecentEntities, isPending, error };
};
