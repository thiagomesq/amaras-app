import { NextResponse } from 'next/server';
import { createPublicClient, createWalletClient, http, Hex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { polygonAmoy } from 'viem/chains';
import { ENTITY_MANAGER_ADDRESS, ENTITY_MANAGER_ABI } from '@/lib/constants';

// Acessa a chave privada de forma segura no servidor
const privateKey = process.env.PRIVATE_KEY as Hex;

// Cria a conta e os clientes dentro da rota da API
const account = privateKeyToAccount(privateKey);

const publicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});

const walletClient = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

export async function POST(request: Request) {
  if (!privateKey) {
    console.error('A chave privada não foi configurada no servidor.');
    return NextResponse.json({ error: 'Erro de configuração do servidor.' }, { status: 500 });
  }

  try {
    const { name, metadata, entityHash } = await request.json();

    if (!name || !metadata || !entityHash) {
      return NextResponse.json({ error: 'Dados da entidade ausentes.' }, { status: 400 });
    }

    // Assina e envia a transação do lado do servidor
    const hash = await walletClient.writeContract({
      address: ENTITY_MANAGER_ADDRESS,
      abi: ENTITY_MANAGER_ABI.abi,
      functionName: 'registerEntity',
      args: [name, metadata, entityHash],
      account,
    });

    // Aguarda a confirmação da transação
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    return NextResponse.json({ receipt });

  } catch (err) {
    console.error('Erro na API ao registrar entidade:', err);
    return NextResponse.json({ error: 'Falha ao registrar a entidade.' }, { status: 500 });
  }
}
