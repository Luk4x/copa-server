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
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes-and-examples">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-plugins">Plugins</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 🌳 ERD
<div align="center">
 <img src="./prisma/ERD.svg" alt="prisma erd image" />
</div>

## 🚀 Technologies Used

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

## 📝 About

This project is the **Copa** API, which is, in short, a world cup themed application that performs the registration and management of pools, games and users, developed during the Ignite trail of the NLW Copa of [Rocketseat](https://www.rocketseat.com.br/).<br>
This API is the basis for its [Web](https://github.com/Luk4x/copa-web) interface developed essentially with NextJS, and [Mobile](https://github.com/Luk4x/copa-mobile) primarily developed with React Native.

### 📃 Routes and Examples
- `GET /me`: This route returns information about the user.

- `POST /users`: This is responsible for creating/authenticating a user by google, filling it with the following information received from google and validated with `zod`. Your schema is:

    ```js
    {
        id: z.string(),
        email: z.string().email(),
        name: z.string(),
        picture: z.string().url()
    }
    ```

- `GET /pools/:id/games`: Based on the `id` sent, this route lists all games related to the given pool.

- `GET /guesses/count`: This route returns the total number of guesses made.

- `POST /pools/:poolId/games/:gameId/guesses`: Based on the `id` parameters in the `firstTeamPoints` and `secondTeamPoints` values ​​sent by the body, this route creates a guess for the given game at the given pool with the values ​​received.
  
- `GET /pools/count`: This route returns the total pools created.

- `POST /pools`: Based on the `title` sent by `body`, this route creates a pool with the given title, and generates its `code` automatically with the help of `short-unique-id`.

- `POST /pools/join`: Based on the `code` sent by `body`, this route allows a given user to become a participant in a given pool.

- `GET /pools`: This route returns the first 4 pools it finds.

- `GET /pools/:id`: Based on the `id` sent, this route returns information about a given pool.

- `GET /users/count`: Returns the total number of registered users.

### 🔑 Plugins
- `authenticate`: Its function is to perform user verification/validation with JWT.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v18.12.0](https://nodejs.org/en/) or higher, and preferably an API Client such as [Insomnia](https://insomnia.rest/) (it can also be accessed through the browser, but with limited functionalities) previously installed.<br>In the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/copa-server.git

# Enter the repository with:
> cd copa-server

# Install dependencies with: 
> npm install

# Run the project with:
> npm run dev

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://localhost:3333/ or http://0.0.0.0:3333/)
```

## 🤝 Contributor Contact

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
| :sparkles: Name        | **⚽ Copa API**
| :label: Technologies | nodejs, prisma, typescript, prisma erd generator, short unique id, fastify, mermaid-js, jwt, zod, npm
| :camera: Img         | <img src="./prisma/ERD.svg#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-copa-project-api">Back to Top</a>
</p>
