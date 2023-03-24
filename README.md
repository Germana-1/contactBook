README

Este projeto é uma aplicação para cadastro de clientes e seus contatos, utilizando as tecnologias Node.js, Express e PostgreSQL no back-end e React e Next.js no front-end.

Documentação: (link da documentação)

Para cadastrar um cliente, são necessários os seguintes campos:

Nome completo
E-mail
Telefone
Senha

Já para cadastrar um contato, são necessários os seguintes campos:

Nome completo
E-mail
Telefone

Um cliente pode ter mais de um contato vinculado a ele.

A aplicação conta com as operações básicas de um CRUD (Create, Read, Update e Delete) tanto para clientes quanto para contatos.

Tecnologias utilizadas:

Back-end:

Node.js
Express
PostgreSQL

Front-end:

React
Next.js
Chakra UI
Emotion
Framer Motion
Axios
React Hook Form
Yup
TypeScript

Para executar o projeto em sua máquina, siga os seguintes passos:

Como usar
Antes de usar o projeto, é necessário configurar o servidor back-end.
Lembre-se que você precisa ter Node.js e o PostgreSQL instalados em sua máquina.

Configurando o servidor

Abra o diretório back/ em seu terminal e execute o comando npm install para instalar as dependências.
Crie um banco de dados no PostgreSQL e configure as informações de conexão no arquivo .env a partir do arquivo .env.example
Execute as migrations do banco de dados com o comando npm run typeorm migration:run -- -d ./src/data-source.
Inicie o servidor com o comando npm run dev.

Configurando o cliente
Abra o diretório front/ em seu terminal e execute o comando npm install para instalar as dependências.
Inicie o cliente com o comando npm run dev.
Acesse o cliente no navegador pelo endereço http://localhost:3000.

Observações
Para fazer requisições do cliente front-end, é necessário que o servidor back-end esteja em execução. Certifique-se de que o servidor está sendo executado antes de usar o cliente.
