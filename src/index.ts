import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { config } from "dotenv";
import { createApolloGraphqlServer } from "./graphql";
import { db } from "./db/client";
config();

async function init() {
  const app = express();
  const PORT = process.env.PORT!;
  console.log(await db.selectFrom("users").selectAll().executeTakeFirst());
  app.use(express.json());

  app.get("/api", (req, res) => {
    req.body;
    res.json({ message: "server is running!" });
  });

  app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Graphql Playground at http://localhost:${PORT}/graphql`);
  });
}

init();
