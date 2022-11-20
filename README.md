<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/copa-server?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# ⚽ Copa Project API

<br>
<p align="center">
  <a href="#-erd">ERD</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas-e-exemplos">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-plugins">Plugins</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 🌳 ERD
<div align="center">
  <img src="./prisma/ERD.svg" alt="prisma erd image" />
</div>

## 🚀 Tecnologias utilizadas

- [Prisma](https://www.prisma.io/)
- [Prisma Erd Generator](https://www.npmjs.com/package/prisma-erd-generator)
- [Short Unique Id](https://www.npmjs.com/package/short-unique-id)
- [Typescript](https://www.typescriptlang.org/)
- [@mermaid-js/mermaid-cli](https://www.npmjs.com/package/@mermaid-js/mermaid-cli)
- [Fastify](https://www.fastify.io/)
- [@fastify/jwt](https://www.npmjs.com/package/@fastify/jwt)
- [Zod](https://www.npmjs.com/package/zod)
- [NodeJS](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## 📝 Sobre

Esse projeto é a API da **Copa**, que é resumidamente, uma aplicação temática da copa do mundo que realiza o cadastro e a gerência de bolões, jogos e usuários, desenvolvida durante a trilha Ignite da NLW Copa da [Rocketseat](https://www.rocketseat.com.br/).<br>
Essa API é a base para a sua interface [Web](https://github.com/Luk4x/copa-web) desenvolvida essencialmente com NextJS, e [Mobile](https://github.com/Luk4x/copa-mobile) desenvolvida essencialmente com React Native.


### 📃 Rotas e Exemplos
-   `GET /me`: Essa rota retorna informações sobre o usuário.

-   `POST /users`: Essa é responsável por criar/autenticar um usuário pelo google, preenchendo-o com as seguintes informações recebidas do google e validadas com o `zod`. Seu schema é:
    
    ```js
    {
        id: z.string(),
        email: z.string().email(),
        name: z.string(),
        picture: z.string().url()
    }
    ```

-   `GET /pools/:id/games`: Com base no `id` enviado, essa rota lista todos os jogos relacionados ao determinado bolão.

-   `GET /guesses/count`: Essa rota retorna o total de palpites feitos.

-   `POST /pools/:poolId/games/:gameId/guesses`: Com base nos parâmetros de `id` nos valores de `firstTeamPoints` e `secondTeamPoints` enviados pelo body, essa rota cria um palpite para o determinado jogo no determinado bolão com os valores recebidos.
  
-   `GET /pools/count`: Essa rota retorna o total de bolões criados.

-   `POST /pools`: Com base no `title` enviado pelo `body`, essa rota cria um bolão com o determinado título, e gera seu `code` automáticamente com o auxílio do `short-unique-id`.

-   `POST /pools/join`: Com base no `code` enviado pelo `body`, essa rota permite um determinado usuário se tornar participante do determinado bolão.

-   `GET /pools`: Essa rota retorna os primeiros 4 bolões que ela encontrar.

-   `GET /pools/:id`: Com base no `id` enviado, essa rota retorna informações sobre um determinado bolão.

-   `GET /users/count`: Retorna o total de usuários cadastrados.

### 🔑 Plugins
- `authenticate`: Sua função é realizar a verificação/validação do usuário com JWT.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/), [Node.js v18.12.0](https://nodejs.org/en/) ou superior e de preferência, um API Client como o [Insomnia](https://insomnia.rest/) (mas também pode ser acessado pelo navegador, porém com suas funcionalidades limitadas) previamente instalados.<br>No terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/copa-server.git

# Entre no repositório com:
> cd copa-server

# Instale as dependências com: 
> npm install

# Execute o projeto com:
> npm run dev

# Feito isso, você já poderá acessar o projeto pelo link que aparecerá no terminal! (algo como http://localhost:3333/ ou http://0.0.0.0:3333/)
```

## 🤝 Contato dos Contribuintes

<table border="2">
  <tr>
    <td align="center">
      <details>
        <summary>
          <b><a href="https://cursos.alura.com.br/vitrinedev/lucasmacielf">Vitrine.Dev</a> 🪟</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/Luk4x">
                  <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/lucasmacielf/">
                  <sub>
                    <b>Lucas Maciel</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

| :placard: Vitrine.Dev | Lucas Maciel |
| -------------  | --- |
| :sparkles: Nome        | **⚽ Copa API**
| :label: Tecnologias | nodejs, prisma, typescript, prisma erd generator, short unique id, fastify, mermaid-js, jwt, zod, npm
| :camera: Img         | <img src="./prisma/ERD.svg#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-copa-project-api">Voltar ao Topo</a>
</p>
