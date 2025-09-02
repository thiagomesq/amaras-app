import { useState } from 'react';
import { createPublicClient, createWalletClient, http, Hex, decodeFunctionData } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { polygonAmoy } from 'viem/chains';
import { ENTITY_MANAGER_ADDRESS, ENTITY_MANAGER_ABI } from '@/lib/constants';

// Validação da chave privada (deve estar em um arquivo .env.local)
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as Hex;
if (!privateKey) {
  throw new Error('A chave privada não foi encontrada em .env.local. Por favor, defina NEXT_PUBLIC_PRIVATE_KEY.');
}

// Criação da conta local
const account = privateKeyToAccount(privateKey);

// Configuração dos clientes Viem
const publicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});

const walletClient = createWalletClient({
  account,
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
      const hash = await walletClient.writeContract({
        address: ENTITY_MANAGER_ADDRESS,
        abi: ENTITY_MANAGER_ABI.abi,
        functionName: 'registerEntity',
        args: [name, metadata, entityHash],
        account, // Especifica a conta para assinar a transação
      });

      // Aguarda a confirmação da transação
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      setIsPending(false);
      return receipt;
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

  return { registerEntity, isPending, error };
};
