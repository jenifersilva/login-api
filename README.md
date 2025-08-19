# Login API

API Rest para autenticação de login usando Node.js, Express e Swagger.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Testes

```bash
npm test
```

## Estrutura de Diretórios

- `controller/` - Lógica das rotas
- `service/` - Regras de negócio
- `model/` - Modelos de dados
- `app.js` - Configuração do Express e Swagger
- `server.js` - Inicialização do servidor

## Pipeline CI

A pipeline está configurada em `.github/workflows/ci.yml` para executar os testes automaticamente após o clone do repositório.
