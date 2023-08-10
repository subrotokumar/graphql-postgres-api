import { ApolloServer } from "@apollo/server";
import { User } from "./user";

export async function createApolloGraphqlServer(): Promise<ApolloServer> {
  const graphqlServer = new ApolloServer({
    typeDefs: `
        type Query{
            ${User.query}
        }
        type Mutation {
            ${User.mutation}
        }
    `,
    resolvers: {
      Query: {
        ...User.resolver.queries,
      },
      Mutation: {
        ...User.resolver.muations,
      },
    },
  });

  await graphqlServer.start();
  return graphqlServer;
}
