import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import path from "node:path"
import { context } from "./Context"
import { UserResolver } from "./UserResolver"
import { RideResolver } from "./RideResolver"

async function startServer() {
  const schema = await buildSchema({
    resolvers: [UserResolver, RideResolver],
    validate: { forbidUnknownValues: false },
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  })
  const server = new ApolloServer({ schema, context })

  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

startServer()