// Create Express server with Apollo Server
import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const PORT = 3000;
(async function () {
  const app = express();
  app.use(express.json());

  const publicPath = path.resolve(__dirname, './public');
  app.use(express.static(publicPath));

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
    console.log(
      `🚀 GraphQL Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
})();
