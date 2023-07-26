import { ApolloServer } from "apollo-server-express"
import "reflect-metadata"
import { schema } from "./schemas"
import express from "express"

async function startServer() {
  const app = express()
  
  const server = new ApolloServer({ schema, context: ({ req }) => {
    const context = {
      req,
      token: req.headers.authorization
    }

    return context
  } })

  await server.start()

  server.applyMiddleware({ app })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server is running, GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`)
  })
}

startServer()