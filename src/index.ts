import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = 8000;

  app.use(express.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
        type Query{
            hello: String
            say(name: String) : String
        }
    `,
    resolvers: {
      Query: {
        hello: () => `Hello Graphql`,
        say: (_, { name }: { name: String }) => `Hey ${name}, How are you`,
      },
    },
  });

  await graphqlServer.start();

  app.get("/api", (req, res) => {
    req.body;
    res.json({ message: "server is running" });
  });

  app.use("/graphql", expressMiddleware(graphqlServer));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Graphql Console at http://localhost:${PORT}`);
  });
}

init();
