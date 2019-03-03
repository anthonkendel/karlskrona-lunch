import places from '@server/places.json';
import { typeDefs } from '@server/types/typeDefs';
import * as Apollo from 'apollo-server';
import { ISource } from './types/ISource';
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

const sources: ISource[] = places.sources;
// tslint:disable-next-line no-console
console.log(sources);
