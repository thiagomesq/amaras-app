# Projeto Amara

A Amara é uma plataforma descentralizada que conecta doadores a crianças em situação de vulnerabilidade, garantindo que as doações sejam gerenciadas de forma transparente e segura através da tecnologia blockchain.

## Funcionalidades Atuais

- **Autenticação de Usuários**: Login social com Google utilizando Firebase Authentication.
- **Dashboard Dinâmico**: Após o login, a administradora (Akachi) é redirecionada para um dashboard que exibe as últimas crianças cadastradas, com dados lidos diretamente da blockchain.
- **Cadastro de Crianças na Blockchain**: Um formulário permite o cadastro de novas crianças. Os dados são registrados no contrato `EntityManager` na rede Polygon Amoy.
- **Assinatura de Transações via Backend**: As transações de escrita (como o cadastro de crianças) são assinadas por uma conta local segura, financiada pela organização, abstraindo a complexidade da blockchain para o usuário final.

## Como Começar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20.x ou superior)
- [pnpm](https://pnpm.io/)

### 2. Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd amaras-app
pnpm install
```

### 3. Configuração do Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```env
# Firebase (obtenha no console do seu projeto Firebase)
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="..."
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FIREBASE_APP_ID="..."

# WalletConnect (obtenha no site do WalletConnect Cloud)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="..."

# Chave Privada (para a conta que assina as transações)
# ATENÇÃO: Use uma conta de teste sem fundos reais.
NEXT_PUBLIC_PRIVATE_KEY="0x..."
```

### 4. Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
pnpm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Próximos Passos e Melhorias

- **Mover Assinador para o Backend**: Refatorar a lógica de assinatura de transações para um serviço de backend seguro, eliminando a necessidade de expor a chave privada no frontend.
- **Implementar Fluxo de Doação**: Desenvolver a interface para que doadores possam realizar contribuições para as crianças cadastradas, utilizando o contrato `Contribution`.
- **Visualização de NFTs**: Criar uma seção onde os usuários possam visualizar os NFTs recebidos como comprovante de suas doações ou registros.
- **Página de Detalhes da Criança**: Permitir que ao clicar em uma criança no dashboard, o usuário seja levado a uma página com mais detalhes e histórico de doações.
- **Testes**: Adicionar testes unitários e de integração para garantir a robustez dos hooks e componentes.