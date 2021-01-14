<div align="center">
<h1><strong>💻 Login 💻</strong></h1>

<h2> Diretorio com as pre configurações de um servidor node Js.</h2>

<h3>
  <a href="https://nodejs.org/en/">🔗 Microserviço Nodejs </a>
</h3>

</div>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

<div align="center">

## 🛠 Dependencias

<br>

![Badge](https://img.shields.io/static/v1?label=express&message=^4.17.1&color=<COLOR>&style=flat-square)
![Badge](https://img.shields.io/static/v1?label=typeorm&message=^0.2.29&color=orange&style=flat-square)
![Badge](https://img.shields.io/static/v1?label=pg&message=^8.5.1&color=blue&style=flat-square)
![Badge](https://img.shields.io/static/v1?label=sqlite3&message=^5.0.0&color=<COLOR>&style=flat-square)

<h4 align="center">

    ✔️  Node Js 🚀 Final  ✔️

</h4>
</div>
<br>

## Clone este repositório

> $ git clone <https://github.com/ander5onPereira/init_node.git> > <br>

## Acesse a pasta do projeto no terminal/cmd

> $ cd init_node
> <br>

## Instale as dependências

> $ yarn install
> <br>

## Execute a aplicação em modo de desenvolvimento

> $ yarn start
> <br>

## O servidor inciará na porta:3001

- acesse <http://localhost:3001>

## Comandos adicionais

Cria uma nova migration:

> yarn typeorm migration:create -n NOME

Executar migration:

> yarn typeorm migration:run

Reverter migration:

> yarn typeorm migration:revert

Apagar todo o banco de dados:

> yarn typeorm schema:drop
