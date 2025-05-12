# Boilerplate Node.js

Este é um boilerplate para projetos Node.js com TypeScript, Express e Bull para gerenciamento de filas.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Bull (para gerenciamento de filas)
- Redis
- Docker

## 📦 Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── http/            
│   ├── controllers/  # Controladores da aplicação
│   ├── dto/          # Data Transfer Objects
│   ├── repositories/ # Repositórios para acesso a dados
│   └── services/     # Serviços de negócio
├── jobs/             # Jobs para processamento em fila
├── providers/        # Provedores de serviços (Bull, etc)
└── routes/           # Rotas da aplicação
```

## 🛠️ Configuração

1. Clone o repositório
2. Instale as dependências:
```bash
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o Redis usando Docker:
```bash
docker-compose up -d redis
```

## 🚀 Executando o Projeto

```bash
# Desenvolvimento
yarn dev

# Produção
yarn build
yarn start
```

## 📝 Funcionalidades Implementadas

### Autenticação
- Rota de login com validação usando Zod
- Processamento assíncrono de jobs após login

### Jobs
- Sistema de filas usando Bull
- Job de exemplo que dispara mensagem após login
- Configuração de retry e backoff

### Validação
- Validação de dados usando Zod
- Middlewares de validação para rotas

## 🔄 Fluxo de Autenticação

1. Usuário faz requisição de login
2. Dados são validados pelo middleware
3. Service processa a autenticação
4. Job é disparado para processamento assíncrono
5. Após 10 segundos, mensagem é exibida no console

## 🐳 Docker

O projeto inclui configuração Docker com:
- Redis para gerenciamento de filas
- Configuração para a aplicação Node.js

Para iniciar apenas o Redis:
```bash
docker-compose up -d redis
```

## 📚 Scripts Disponíveis

- `yarn dev`: Inicia o servidor em modo desenvolvimento
- `yarn build`: Compila o projeto
- `yarn start`: Inicia o servidor em modo produção
- `yarn test`: Executa os testes

## 🔧 Variáveis de Ambiente

- `APP_PORT`: Porta da aplicação (default: 3333)
- `REDIS_HOST`: Host do Redis (default: localhost)
- `REDIS_PORT`: Porta do Redis (default: 6379)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
