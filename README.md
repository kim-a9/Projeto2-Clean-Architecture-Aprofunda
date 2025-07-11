# Projeto2-Clean-Architecture-Aprofunda


**📌Objetivo e Descrição:**


Esta é uma API simples para gerenciamento de livros em uma biblioteca, desenvolvida com TypeScript, Express, CORS (para segurança no tráfego de dados) e UUID (para para identificadores únicos). A estrutura segue os princípios da Clean Architecture para organização do código.

**🛠️ Tecnologias e Ferramentas**

TypeScript

Express.js

CORS

UUID

Thunder Client (para testes)

**⚙️ Pré-requisitos**

Antes de começar, certifique-se de ter instalado:

Node.js (versão 16 ou superior)

npm (geralmente vem com o Node.js)

Thunder Client (extensão do VS Code) ou Postman para testar os endpoints

# 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar o projeto em seu ambiente local:

**Clone o repositório**

```console
git clone https://github.com/kim-a9/Projeto2-Clean-Architecture-Aprofunda.git
cd api-clean-architecture
```

**Instale as dependências**

```javascript

npm install
```
Isso instalará todas as dependências listadas no package.json, incluindo:

express

typescript

@types/express

@types/node

@types/cors

@types/uuid

cors

uuid

ts-node-dev (para desenvolvimento)

**Executando o Projeto**
Para iniciar o servidor em modo de desenvolvimento:

```javascript
npm run start
```

Isso iniciará o servidor usando ts-node-dev, que monitora alterações nos arquivos e reinicia automaticamente.

O servidor estará disponível em:

```console
http://localhost:3000
```

# 🏗️ Estrutura do Projeto (Clean Architecture)
O projeto segue uma organização modular com separação de responsabilidades:


```markdown
src/
├── index.ts               # Ponto de entrada - Configuração do servidor Express
├── routes/
│   └── library-routes.ts  # Define todas as rotas da API (ex: GET /livros)
├── controllers/
│   └── library-controller.ts # Processa requisições HTTP e retorna respostas
├── services/
│   └── book-service.ts       # Contém a lógica de negócio (ex: cadastro de livros)
├── factories/
│   └── book-factory.ts       # Implementa Factory Pattern para criar objetos Livro
├── storage/
│   └── book-storage.ts       # Gerencia armazenamento em memória (Singleton)
├── models/
│   └── book-model.ts         # Define a estrutura/classe do modelo Livro
├── tsconfig.json           # Configurações do TypeScript
└── package.json            # Dependências e scripts do Node.js
```

**📌 Fluxo Principal**
Rotas (library-routes.ts) → Direcionam requisições para os controllers.

Controllers (library-controller.ts) → Validam dados e chamam serviços.

Services (book-service.ts) → Executam regras de negócio (ex: validações).

Storage (book-storage.ts) → Armazena/recupera dados em memória (Singleton).


# 🧪 Testando a API

**1. Listar todos os livros (GET)**

```console
GET http://localhost:3000/books
```
Exemplo de resposta:

```json
json
[
  {
    "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    "title": "Quarto de Despejo", 
    "author": "Carolina Maria de Jesus", 
    "genre": "diario"
  },
  {
    "id": "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    "title": "Um defeito de cor", 
    "author": "Ana Maria Gonçalves", 
    "genre": "romance"
  }
]
```

**2. Adicionar um novo livro (POST)
**
```console

POST http://localhost:3000/books
```
Use como exemplo os dados: 
```json
{
  "title": "Insubmissas Lágrimas de Mulheres", 
  "author": "Conceição Evaristo", 
  "genre": "romance"  
}
```

Exemplo de resposta (sucesso):

```json

{
  "id": "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
  "title": "Insubmissas Lágrimas de Mulheres", 
  "author": "Conceição Evaristo", 
  "genre": "romance" 
}
```

# Testando com Thunder Client
- Instale o Thunder Client (extensão para VS Code)

- Abra o VS Code

- Vá para a aba de extensões (Ctrl+Shift+X)

- Busque por "Thunder Client" e instale

### Testando as rotas

> GET /books

- Abra o Thunder Client

- Selecione o método > GET

- Digite a URL: http://localhost:3000/books

- Clique em "Send"

![resultado GET /books: array vazia](<img/get books (array vazia).png>)

> POST /books

- Selecione o método > POST

- Digite a URL: http://localhost:3000/books

- Vá para a aba "Body"

- Selecione "JSON"

- Cole o exemplo de corpo JSON mostrado acima
![usando exemplo de POST /books](<img/post books.png>)

- Clique em "Send"

![resultado GET /books: todos os livros registrados](<img/get books (array de livros).png>)


**###📌 Atualizações Recentes**

### [1.2.0] - 2025-07-04
- Adicionada funcionalidade para deletar registro do livro por id

### [1.1.0] - 2025-07-23
- Nova funcionalidade: listagem de livro por id e atualização de dados do livro

### [1.0.0] - 2025-06-28
- Versão inicial do projeto publicada