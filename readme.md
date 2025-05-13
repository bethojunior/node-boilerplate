# Node.js Boilerplate

Este é um boilerplate para projetos Node.js utilizando TypeScript, Express, Prisma e injeção de dependência com tsyringe.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma (ORM)
- Tsyringe (Injeção de Dependência)

## 📦 Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── http/
│   ├── controllers/  # Controladores da aplicação
│   ├── dto/          # Data Transfer Objects
│   ├── repositories/ # Repositórios para persistência de dados
│   └── services/     # Lógica das regras de negócio
├── jobs/             # Jobs em background
├── prisma/           # Configurações e schemas do Prisma
└── routes/           # Definição das rotas da API
```

## 🛠️ Arquitetura

O projeto segue uma arquitetura limpa com:

- **Controllers**: Responsáveis por receber as requisições HTTP e retornar as respostas
- **Services**: Contêm a lógica de negócio da aplicação
- **Repositories**: Responsáveis pelo acesso aos dados usando Prisma
- **DTOs**: Objetos de transferência de dados para validação

### Injeção de Dependência

O projeto utiliza o `tsyringe` para gerenciar a injeção de dependência. Exemplo de uso:

```typescript
// Controller com injeção de dependência
export default class AuthController {
  constructor(
    @inject('UserService')
    private userService: UserService
  ) {}

  async handleLogin(request: Request, response: Response) {
    // ...
  }
}
```

## 🚀 Como executar

1. Clone o repositório
2. Instale as dependências:
```bash
yarn install
```

3. Configure o banco de dados:
```bash
# Gere o cliente do Prisma
npx prisma generate

# Execute as migrações
npx prisma migrate dev
```

4. Execute o projeto:

Para desenvolvimento:
```bash
yarn dev
```

Para produção:
```bash
# Start no projeto
$ docker compose up -d --build

# Ver logs
$ docker compose logs -f
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
