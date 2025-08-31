import { useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRIBUTION_ABI, CONTRIBUTION_ADDRESS } from '@/lib/constants';

export const useContribution = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

  const contribute = async (orgAddress: `0x${string}`, entityId: number, amount: string) => {
    return await writeContractAsync({
      abi: CONTRIBUTION_ABI.abi,
      address: CONTRIBUTION_ADDRESS,
      functionName: 'contribute',
      args: [orgAddress, BigInt(entityId)],
      value: parseEther(amount),
    });
  };

  return { contribute, ...rest };
};
