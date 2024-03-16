import { GraphQLClient } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql';
export const graphqlClient = new GraphQLClient(url);

const localUrl = '/graphql';

export const mockGraphqlClient = new GraphQLClient(localUrl);
