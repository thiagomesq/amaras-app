import { useReadContract, useAccount } from 'wagmi';
import { ENTITY_TOKEN_ABI, ENTITY_TOKEN_ADDRESS } from '@/lib/constants';

export const useEntityToken = () => {
  const { address } = useAccount();

  const { data: balance, isLoading: isLoadingBalance } = useReadContract({
    abi: ENTITY_TOKEN_ABI.abi,
    address: ENTITY_TOKEN_ADDRESS,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: !!address,
    },
  });

  const userHasNFT = balance ? balance > 0 : false;

  // Adicionar mais lógicas de leitura aqui, como get tokenURI, etc.

  return { userHasNFT, isLoadingBalance };
};
