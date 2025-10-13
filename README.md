# 🧩 Projeto Full Stack — Node.js + PostgreSQL + Angular

Este repositório contém uma aplicação **Full Stack** composta por dois módulos principais:

- **back-end/** → API desenvolvida em **Node.js** com **Express** e **PostgreSQL**  
- **front-end/** → Interface web desenvolvida em **Angular**

O projeto foi estruturado para demonstrar uma arquitetura moderna de aplicações web, com separação clara entre o cliente (UI) e o servidor (API), seguindo boas práticas de engenharia de software.

---

## 🚀 Estrutura do Projeto

📦 nome-do-projeto
├── 📁 back-end/ # Projeto Node.js (API RESTful)
│ ├── src/
│ ├── package.json
│ ├── .env.example
│ └── README.md
│
└── 📁 front-end/ # Projeto Angular (Interface do Usuário)
├── src/
├── angular.json
├── package.json
└── README.md


---

## 🧠 Tecnologias Utilizadas

### **Back-end**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Supabase](https://supabase.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente

### **Front-end**
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular CLI](https://angular.io/cli)

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [Node.js >= 18.x](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) instalado globalmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### 2️⃣  Configurar e executar o Back-end
```bash
cd back-end
cp .env.example .env
```
## Edite o arquivo .env e configure suas variáveis, por exemplo:

PORT=3000
DATABASE_URL=localhost


## Instale as dependências e inicie o servidor:
```bash
npm install
npm run start
```

### 3️⃣ Configurar e executar o Front-end
```bash
cd ../front-end
npm install
ng serve
```

