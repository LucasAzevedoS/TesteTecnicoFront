Sistema de Controle Financeiro

Aplicação web para controle financeiro, permitindo o gerenciamento de usuários, pessoas, categorias e transações.

O projeto foi desenvolvido com separação clara entre backend e frontend, utilizando arquitetura em camadas e integração via API REST.

Tecnologias Utilizadas
Backend

ASP.NET Core Web API

Dapper (Micro ORM)

SQL Server

Docker

Arquitetura em camadas (Controller, Service, Repository)

Frontend

Next.js (App Router)

React

TypeScript

Mantine UI

Consumo de API via Fetch

Arquitetura do Projeto

O sistema é dividido em duas aplicações:

/backend   → API ASP.NET Core
/frontend  → Next.js


O frontend consome os endpoints REST expostos pelo backend.

A API foi estruturada utilizando:

Controllers para exposição das rotas

Services para regras de negócio

Repository para acesso a dados

Dapper para execução de queries SQL

Funcionalidades Implementadas

Cadastro de usuário

Login de usuário

Cadastro de pessoas

Cadastro de categorias

Cadastro de transações

Listagem de transações com JOIN (Pessoa + Categoria)

Edição e exclusão de registros

Proteção de rotas no frontend

Persistência de sessão via localStorage

Endpoints da API
Autenticação
POST /login

Realiza autenticação do usuário.

Body:

{
  "email": "usuario@email.com",
  "senha": "123456"
}


Retorno:

{
  "id": 1,
  "nome": "Usuário",
  "email": "usuario@email.com"
}

Pessoas
GET /selPessoa

Retorna lista de pessoas cadastradas.

POST /incluiPessoa

Cria uma nova pessoa.

Body:

{
  "nome": "João"
}

DELETE /excluiPessoa/{id}

Remove uma pessoa pelo id.

Categorias
GET /selCategoria

Retorna lista de categorias.

POST /incluiCategoria

Cria uma nova categoria.

Body:

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

Cria uma nova transação.

Body:

{
  "descricao": "Compra mercado",
  "valor": 150.00,
  "tipo": "Saída",
  "pessoaId": 1,
  "categoriaId": 2
}

DELETE /excluiTransacao/{id}

Remove uma transação pelo id.

Banco de Dados

O banco utilizado foi SQL Server executando via Docker.

Executando SQL Server via Docker

Comando utilizado:

docker run -e "ACCEPT_EULA=Y" \
           -e "SA_PASSWORD=SuaSenhaForte123" \
           -p 1433:1433 \
           --name sql-financeiro \
           -d mcr.microsoft.com/mssql/server:2022-latest


Após a execução, o SQL Server ficará disponível em:

localhost,1433

Conectando no SQL Server via SSMS

Abra o SQL Server Management Studio (SSMS)

Em "Server name" informe:

localhost,1433


Authentication: SQL Server Authentication

Login: sa

Password: a senha definida no Docker (ex: SuaSenhaForte123)

Após conectar, é possível:

Criar o banco de dados

Criar tabelas

Executar scripts SQL

Consultar dados manualmente

Configuração da Connection String

No appsettings.json do backend:

"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=FinanceiroDB;User Id=sa;Password=SuaSenhaForte123;TrustServerCertificate=True;"
}

Como Executar o Projeto
Backend
dotnet restore
dotnet run


A API ficará disponível em:

https://localhost:7033

Frontend
npm install
npm run dev


Aplicação disponível em:

http://localhost:3000

Observações Técnicas

A autenticação foi implementada inicialmente sem JWT, utilizando armazenamento do usuário no localStorage.

A estrutura foi preparada para futura implementação de autenticação baseada em token.

O uso do Dapper foi escolhido por ser leve e permitir controle explícito das queries SQL.

O layout foi construído com Mantine, priorizando um design minimalista e tema escuro.
