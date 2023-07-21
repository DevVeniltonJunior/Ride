import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import path from "node:path"

export async function startServer() {
  const schema = await buildSchema({
    resolvers: [
      //toDo: Remove this code bellow and create resolvers for each module
      path.resolve(__dirname, "..", "modules", "user", "resolvers", "*.ts"),
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  })
  const server = new ApolloServer({})

  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}
