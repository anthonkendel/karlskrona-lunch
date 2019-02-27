import '@server/crawlers/crawler';
import { typeDefs } from '@server/types/typeDefs';
import * as Apollo from 'apollo-server';

const { ApolloServer } = Apollo;

const resolvers = {};

const server = new ApolloServer({
  mocks: true,
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line no-console
  console.log(`Server ready at ${url}`);
});
