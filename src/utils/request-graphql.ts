import { createApolloFetch } from 'apollo-fetch';

const apolloFetch = createApolloFetch({
  uri: 'https://deno-server.herokuapp.com/graphql'
}); 

class GraphqlFetchFailedException extends Error {
  constructor(public readonly reason: any, public readonly supplement?: any) {
    super();
  }
}

export default (query: string, variables?: any): Promise<any> => {
  return apolloFetch({ query, variables })
    .then(res => {
      if (res.errors) {
        throw new GraphqlFetchFailedException(res.errors, res);
      }
      return res.data;
    });
};