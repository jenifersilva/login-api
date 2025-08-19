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

## Relatório de Testes no GitHub Pages

Após cada push na branch `main`, um relatório HTML dos testes é gerado e publicado automaticamente no GitHub Pages, disponível em:

[https://jenifersilva.github.io/login-api/](https://jenifersilva.github.io/login-api/)

O relatório é gerado com Mochawesome e mostra o resultado dos testes automatizados do projeto.
