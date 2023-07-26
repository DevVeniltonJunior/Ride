# Ride

## Descrição

A Pedal Group API é uma aplicação que possibilita aos usuários a criação de pedais ciclísticos para que outros usuários possam visualizá-los e se inscrever. A ideia é permitir que ciclistas se reúnam em grupos para pedalar juntos, promovendo um ambiente social e saudável para a prática do ciclismo.

## Funcionalidades

- Criação de pedais por usuários.
- Visualização de pedais disponíveis para inscrição.
- Inscrição em pedais.
- Listagem de pedais que o usuário participou.
- Listagem de pedais criados pelo usuário.

## Tecnologias Utilizadas

A API foi desenvolvida utilizando as seguintes tecnologias:

- Typescript: Linguagem de programação.
- NodeJs: Ambiente de execução do código.
- Express: Framework web para NodeJs.
- Apollo Server: Biblioteca para criação de servidores GraphQL.
- TypeGraphQL: Framework para desenvolvimento de APIs GraphQL em TypeScript.
- Prisma: ORM (Object-Relational Mapping) para comunicação com o banco de dados.
- Docker: Plataforma para criação e gerenciamento de contêineres.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
- JWT (JSON Web Tokens): Mecanismo para autenticação e autorização de usuários.

## Como executar o projeto

Siga as etapas abaixo para executar a API localmente:

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. No diretório raiz do projeto, crie o arquivo .env:

  ```
      DATABASE_URL="postgresql://user_user:Userpass@@1@localhost:5432/v1_rider?schema=public"
      PORT=4000
```

4. No diretório raiz do projeto, execute o seguinte comando para criar os contêineres Docker:

   ``` docker-compose up -d ```

5. Assegure-se de que todos os contêineres estão em execução:

    ``` docker ps ```

6. Acesse a API em http://localhost:${PORT}.

## Autorização

A API utiliza o JWT para autenticação de usuários. Para acessar os endpoints protegidos, é necessário incluir o token JWT no cabeçalho das requisições:

Authorization: Bearer <seu_token_jwt_aqui>

## Considerações Finais

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades. Se tiver alguma dúvida, entre em contato na aba issues. Divirta-se pedalando! 🚴‍♀️🚴‍♂️

