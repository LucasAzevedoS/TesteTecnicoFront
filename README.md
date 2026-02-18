# Sistema de Controle Financeiro

Aplicação web para gerenciamento financeiro, permitindo cadastro e controle de usuários, pessoas, categorias e transações.

O projeto foi desenvolvido com separação clara entre backend e frontend, utilizando arquitetura em camadas e integração via API REST.

---

## Tecnologias Utilizadas

### Backend
- ASP.NET Core Web API
- Dapper (Micro ORM)
- SQL Server
- Docker
- Arquitetura em camadas (Controller, Service, Repository)

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Mantine UI
- Consumo de API via Fetch

---

## Arquitetura do Projeto

O sistema é dividido em duas aplicações:

/backend → API ASP.NET Core
/frontend → Next.js
O frontend consome os endpoints REST expostos pelo backend.

A API foi estruturada com:

- Controllers para exposição das rotas
- Services para regras de negócio
- Repository Pattern para acesso a dados
- Dapper para execução de queries SQL

---

## Funcionalidades

- Cadastro de usuário
- Login de usuário
- Cadastro de pessoas
- Cadastro de categorias
- Cadastro de transações
- Listagem de transações com JOIN (Pessoa + Categoria)
- Edição e exclusão de registros
- Proteção de rotas no frontend
- Persistência de sessão via localStorage

---

## Endpoints da API

### Autenticação

#### POST /login

Realiza autenticação do usuário.

**Request Body:**

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
Response
{
  "id": 1,
  "nome": "Usuário",
  "email": "usuario@email.com"
}
Pessoas
GET /selPessoa

Retorna lista de pessoas cadastradas.

POST /incluiPessoa
{
  "nome": "João"
}
DELETE /excluiPessoa/{id}

Remove uma pessoa pelo ID.

Categorias
GET /selCategoria

Retorna lista de categorias.

POST /incluiCategoria
{
  "descricao": "Alimentação",
  "finalidade": "Saída"
}

Transações
GET /selTransacao

Lista transações realizando JOIN com Pessoa e Categoria, retornando:

Descrição

Valor

Tipo

Nome da Pessoa

Nome da Categoria

POST /incluiTransacao
{
  "descricao": "Compra mercado",
  "valor": 150.00,
  "tipo": "Saída",
  "pessoaId": 1,
  "categoriaId": 2
}

DELETE /excluiTransacao/{id}

Remove uma transação pelo ID.

Banco de Dados

O banco utilizado foi SQL Server executando via Docker.

Executando SQL Server via Docker
docker run -e "ACCEPT_EULA=Y" \
           -e "SA_PASSWORD=SuaSenhaForte123" \
           -p 1433:1433 \
           --name sql-financeiro \
           -d mcr.microsoft.com/mssql/server:2022-latest


O servidor ficará disponível em:

localhost,1433

Conectando no SQL Server via SSMS

Abra o SQL Server Management Studio (SSMS)

Em Server name informe:

localhost,1433


Authentication: SQL Server Authentication

Login: sa

Password: a senha definida no Docker

Connection String

No appsettings.json:

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=FinanceiroDB;User Id=sa;Password=SuaSenhaForte123;TrustServerCertificate=True;"
}

Como Executar o Projeto
Backend
dotnet restore
dotnet run


API disponível em:

https://localhost:7033

Frontend
npm install
npm run dev


Aplicação disponível em:

http://localhost:3000

Observações Técnicas

Autenticação implementada inicialmente sem JWT, utilizando armazenamento do usuário no localStorage.

Estrutura preparada para futura implementação de autenticação baseada em token.

Dapper foi utilizado para manter controle explícito das queries SQL.

Interface construída com Mantine priorizando design minimalista e tema escuro.
