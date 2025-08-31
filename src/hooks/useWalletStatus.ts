'use client';

import { useAccount } from 'wagmi';

/**
 * Hook utilitário para obter o estado da carteira conectada.
 */
export const useWalletStatus = () => {
  const { address, isConnected, chainId } = useAccount();

  return {
    isConnected,
    address,
    chainId,
  };
};
