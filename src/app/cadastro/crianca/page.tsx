'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEntityManager } from '@/hooks/useEntityManager'
import { keccak256, toBytes } from 'viem'

export default function CadastroCrianca() {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nomeMae, setNomeMae] = useState('')
  const [peso, setPeso] = useState('')
  const { registerEntity, isPending } = useEntityManager()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const metadata = JSON.stringify({ dataNascimento, nomeMae, peso })
    const entityHash = keccak256(toBytes(`${nome}-${dataNascimento}-${nomeMae}-${peso}`))

    try {
      await registerEntity(nome, metadata, entityHash)
      alert('Criança cadastrada com sucesso!')
      // Limpar formulário ou redirecionar
      setNome('')
      setDataNascimento('')
      setNomeMae('')
      setPeso('')
    } catch (error) {
      console.error('Erro ao cadastrar criança:', error)
      alert('Falha ao cadastrar criança.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Cadastro de Criança</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              placeholder="Nome da criança"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="dataNascimento">Data de Nascimento</Label>
            <Input
              id="dataNascimento"
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="peso">Peso</Label>
            <Input
              id="peso"
              placeholder="Peso da criança"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="nomeMae">Nome da Mãe</Label>
            <Input
              id="nomeMae"
              placeholder="Nome da mãe"
              value={nomeMae}
              onChange={(e) => setNomeMae(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>
      </div>
    </div>
  )
}
