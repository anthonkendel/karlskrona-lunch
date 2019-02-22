import * as Apollo from 'apollo-server';

const { gql, ApolloServer } = Apollo;

const books = [
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    author: 'Michael Crichton',
    title: 'Jurassic Park',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // tslint:disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
