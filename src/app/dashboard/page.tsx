'use client'

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Entity {
  id: bigint | undefined;
  name: string;
}

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <Button onClick={() => router.push('/cadastro/crianca')}>
            Cadastrar Criança
          </Button>
        </div>
      </div>
    </div>
  );
}
