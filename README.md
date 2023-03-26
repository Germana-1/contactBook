# README

Este projeto é uma aplicação para cadastro de clientes e seus contatos, utilizando as tecnologias Node.js, Express e PostgreSQL no back-end e React no front-end.

## Funcionalidades

A aplicação permite cadastrar, consultar, atualizar e excluir clientes e seus contatos. Para cadastrar um cliente, são necessários os seguintes campos:

- Nome completo
- E-mail
- Telefone
- Senha

Já para cadastrar um contato, são necessários os seguintes campos:

- Nome completo
- E-mail
- Telefone

Um cliente pode ter mais de um contato vinculado a ele.

## Tecnologias utilizadas

### Back-end:

- Node.js
- Express
- PostgreSQL
- Yup
- Typeorm
- TypeScript
- Jsonwebtoken

### Front-end:

- React
- React-hook-form
- React-icons
- React-toastify
- Styled-components
- Axios
- Yup

### Para executar o projeto em sua máquina, siga os seguintes passos:

#### Configurando o servidor

Antes de usar o projeto, é necessário configurar o servidor back-end. Lembre-se que você precisa ter Node.js e o PostgreSQL instalados em sua máquina.

Para instalar as dependências, abra o diretório back/ em seu terminal e execute o comando:

```shell
npm install

```

Crie um banco de dados no PostgreSQL e configure as informações de conexão no arquivo .env a partir do arquivo .env.example.
Execute as migrations do banco de dados com o comando:

```shell
npm run typeorm migration:run -- -d ./src/data-source

```

Inicie o servidor com o comando:

```shell
npm run dev

```

#### Configurando o cliente

Para instalar as dependências, abra o diretório front/ em seu terminal e execute o comando:

```shell
npm install

```

Inicie o cliente com o comando:

```shell
npm start

```

Acesse o cliente no navegador pelo endereço http://localhost:3000.

#### Observações:

Para fazer requisições do cliente front-end, é necessário que o servidor back-end esteja em execução.
Certifique-se de que o servidor está sendo executado antes de usar o cliente.

- Para cadastrar um novo cliente, acesse a rota "/register" no cliente front-end e preencha os campos necessários.
- Para fazer login como um cliente já cadastrado, acesse a rota "/" no cliente front-end e informe o e-mail e a senha cadastrados.
- Após fazer login, o usuário pode visualizar, cadastrar, atualizar e excluir seus contatos acessando a rota "/dashboard".

## Endpoints da API

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-de-usuário)
  - [GET - /users](#12-listando-usuários)
  - [GET - /users/profile](#13-pegar-usuário)
  - [PATCH - /users](#14-atualizar-usuário)
  - [DELETE - /users](#15-deletar-usuário)
- [Contacts](#2-contacts)
  - [POST - /contacts](#21-criação-de-contato)
  - [GET - /contacts](#22-listando-contatos)
  - [PATCH - /contacts/:contact_id](#23-atualizar-contato)
  - [DELETE - /contacts/:contact_id](#24-deletar-contato)
- [Login](#3-login)
  - [POST - /login](#11-login-de-usuário)

---

## 1. **Users**

O objeto User é definido como:

| Campo     | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário        |
| fullName  | string | O nome do usuário.                    |
| email     | string | O e-mail do usuário. (Único)          |
| password  | string | A senha de acesso do usuário          |
| phone     | string | O telefone do usuário. (Único)        |
| updatedAt | date   | Data em que o usuário foi atualizado. |
| createdAt | date   | Data em que o usuário foi criado.     |

### Endpoints

| Método | Rota           | Descrição                                |
| ------ | -------------- | ---------------------------------------- |
| POST   | /users         | Criação de um usuário.                   |
| GET    | /users         | Lista todos os usuários                  |
| GET    | /users/profile | Pega o usuário que está autenticado      |
| PATCH  | /users         | Atualiza o usuário que está autenticado. |
| DELETE | /users         | Deleta o usuário que está autenticado.   |

---

### 1.1. **Criação de Usuário**

### `/users`

### Exemplo de Request:

```

POST /users
Host: http://localhost:3002
Authorization: None
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "email": "exemplo@gmail.com",
  "fullName": "Nome do usuário",
  "phone": "5555-5555",
  "password": "senha123"
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "b44d0551-4add-49aa-8d60-04fa40064671",
  "phone": "5555-5555",
  "email": "exemplo@gmail.com",
  "fullName": "Nome do usuário",
  "updatedAt": "2023-03-26T01:27:57.410Z",
  "createdAt": "2023-03-26T01:27:57.410Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |
| 409 Conflict   | Phone already registered. |

---

### 1.2. **Listando Usuários**

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "b44d0551-4add-49aa-8d60-04fa40064671",
    "phone": "5555-5555",
    "email": "exemplo@gmail.com",
    "fullName": "Nome do usuário",
    "updatedAt": "2023-03-26T01:27:57.410Z",
    "createdAt": "2023-03-26T01:27:57.410Z"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 1.3. **Pegar Usuário**

### `/users/profile`

### Exemplo de Request:

```
GET /users/profile
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "b44d0551-4add-49aa-8d60-04fa40064671",
  "phone": "5555-5555",
  "email": "exemplo@gmail.com",
  "fullName": "Nome do usuário",
  "updatedAt": "2023-03-26T01:27:57.410Z",
  "createdAt": "2023-03-26T01:27:57.410Z",
  "contacts": [
    {
      "id": "5db10d22-ed37-482d-bc00-a9dea0e84d12",
      "phone": "11 66666-5541",
      "email": "contato1@contato.com",
      "fullName": "contato 1",
      "isFavorite": "false",
      "updatedAt": "2023-03-25T05:57:01.183Z",
      "createdAt": "2023-03-25T05:57:01.183Z"
    },
    {
      "id": "3994ea74-bde4-4996-8f4d-0131315b303e",
      "phone": "11 66666-5555",
      "email": "contato2@contato.com",
      "fullName": "contato 2",
      "isFavorite": "true",
      "updatedAt": "2023-03-25T06:17:07.594Z",
      "createdAt": "2023-03-25T06:17:07.594Z"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 1.4. **Atualizar Usuário**

### `/users`

### Exemplo de Request:

```
PATCH /users
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "exemplo@gmail.com",
  "fullName": "Nome do usuário",
  "phone": "5555-5555",
  "password": "senha123"
}
```

OBS.: Todas as chaves são opcionais. Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "b44d0551-4add-49aa-8d60-04fa40064671",
  "phone": "5555-5555",
  "email": "exemplo@gmail.com",
  "fullName": "Nome do usuário",
  "updatedAt": "2023-03-26T01:27:57.410Z",
  "createdAt": "2023-03-26T01:27:57.410Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 1.5. **Deletar Usuário**

### `/users`

### Exemplo de Request:

```
DELETE /users
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 No Content
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

## 2. **Contatos**

O objeto Contact é definido como:

| Campo      | Tipo    | Descrição                                             |
| ---------- | ------- | ----------------------------------------------------- |
| id         | string  | Identificador único do contato                        |
| fullName   | string  | O nome do contato.                                    |
| email      | string  | O e-mail do contato. (Único)                          |
| isFavorite | boolean | Define se um contato é favorito ou não. Padrão(false) |
| phone      | string  | O telefone do contato. (Único)                        |
| updatedAt  | date    | Data em que o contato foi atualizado.                 |
| createdAt  | date    | Data em que o contato foi criado.                     |

### Endpoints

| Método | Rota          | Descrição                  |
| ------ | ------------- | -------------------------- |
| POST   | /contacts     | Criação de um contato.     |
| GET    | /contacts     | Lista todos os contatos    |
| PATCH  | /contacts/:id | Atualiza o contato por id. |
| DELETE | /contacts/:id | Deleta o contato por id.   |

---

### 2.1. **Criação de Contato**

### `/contacts`

### Exemplo de Request:

```
POST /contacts
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "phone": "0000-0000",
  "email": "contato@gmail.com",
  "fullName": "Contato",
  "isFavorite": true
}
```

OBS.: A chave "isFavorite" é opcional, caso não seja passada, receberá seu valor padrão(false). Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "20f5ce36-1b91-4675-9dec-b68805de6d31",
  "phone": "0000-0000",
  "email": "contato@gmail.com",
  "fullName": "Contato",
  "isFavorite": true,
  "user": {
    "id": "0bba7905-81d6-4da9-9f93-bb78f1cfe58b",
    "phone": "5555-5555",
    "email": "email@gmail.com",
    "fullName": "Nome do usuário",
    "updatedAt": "2023-03-26T19:41:34.685Z",
    "createdAt": "2023-03-26T19:41:34.685Z"
  },
  "updatedAt": "2023-03-26T19:50:54.686Z",
  "createdAt": "2023-03-26T19:50:54.686Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                 |
| ---------------- | ------------------------- |
| 401 Unauthorized | Invalid token.            |
| 409 Conflict     | Email already registered. |
| 409 Conflict     | Phone already registered. |

---

### 2.2. **Listando Contatos**

### `/contacts`

### Exemplo de Request:

```
GET /contacts
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "52fcd849-6239-4ebd-8fa6-7b231c35b21e",
    "phone": "0000-0000",
    "email": "contato@gmail.com",
    "fullName": "Contato",
    "isFavorite": true,
    "createdAt": "2023-03-26T19:42:13.048Z",
    "updatedAt": "2023-03-26T19:42:13.048Z"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 2.3. **Atualizar Contato**

### `/contacts/:contact_id`

### Exemplo de Request:

```
PATCH /contacts/:contact_id
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                      |
| ---------- | ------ | ------------------------------ |
| contact_id | string | Identificador único do contato |

### Corpo da Requisição:

```json
{
  "phone": "0000-0000",
  "email": "contato@gmail.com",
  "fullName": "Contato",
  "isFavorite": true
}
```

OBS.: Todas as chaves são opcionais. Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "d1e8f3e6-3d59-4635-9bfc-cc438876bde9",
  "phone": "0000-0000",
  "email": "contato@gmail.com",
  "fullName": "Contato",
  "isFavorite": true,
  "createdAt": "2023-03-26T19:45:55.690Z",
  "updatedAt": "2023-03-26T19:45:55.690Z",
  "deletedAt": null
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Contact not found. |

---

### 2.4. **Deletar Contato**

### `/contacts/:contact_id`

### Exemplo de Request:

```
DELETE /contacts/:contact_id
Host: http://localhost:3002
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                      |
| ---------- | ------ | ------------------------------ |
| contact_id | string | Identificador único do contato |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 No Content
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Contact not found. |

---

```

```
