import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
const PORT = process.env.PORT || 5000;
const gateway = new ApolloGateway();
const server = new ApolloServer({
  gateway,
  subscriptions: false,
  playground: {
    settings: {
      //@ts-ignore
      "schema.polling.enable": false,
    },
  },
  introspection: true,
  cacheControl: {
    defaultMaxAge: 60 * 60 * 24,
  },
  cors: {
    origin: "*",
  },
});
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
