import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 sm:p-20">
      <Header />
      <main className="flex flex-col gap-8 items-center text-center mt-16">
        <h1 className="text-4xl font-bold">Bem-vindo ao Amara</h1>
        <p className="text-lg max-w-2xl">
          Este é o portal para o projeto Amara, uma iniciativa que utiliza a tecnologia blockchain para trazer transparência e eficiência ao apoio educacional de crianças na Ilha de Marajó, em parceria com o projeto Akachi.
        </p>
        <p className="text-lg max-w-2xl">
          O projeto Akachi se dedica a fornecer acompanhamento estudantil de qualidade, e com o Amara, garantimos que cada contribuição seja registrada de forma segura e imutável, permitindo que doadores e apoiadores acompanhem o impacto de sua ajuda.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Como funciona?</h2>
          <ol className="list-decimal list-inside text-left max-w-2xl space-y-2">
            <li>As organizações se cadastram para participar do programa.</li>
            <li>As contribuições são convertidas em tokens digitais.</li>
            <li>Os recursos são distribuídos de forma transparente para as necessidades dos estudantes.</li>
            <li>Todo o histórico de transações fica disponível para consulta na blockchain.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
