import { ApolloServer, gql } from "apollo-server-lambda";
import { updateUser } from "./mutations";

const schema = gql`
  type Hello {
    world: String
  }
  type User {
    userId: String,
    createdAt: String,
    lastSignedInAt: String,
  }

  type Query {
    hello: Hello
  }

  type Mutation {
    updateUser(userId: String): User
  }
`

const resolvers = {
  Query: {
    hello: () => ({
      world: "Hello World"
    })
  },
  Mutation: {
    updateUser
  }
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})