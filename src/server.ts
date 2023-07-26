import { ApolloServer } from "apollo-server"
import "reflect-metadata"
import { Context as context } from "./resolvers/Context"
import { schema } from "./schemas"


async function startServer() {

  const server = new ApolloServer({ schema, context })

  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

startServer()