import { ApolloClient, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// const AUTH_TOKEN = "";

const httpLink = createHttpLink({
    uri: 'http://13.57.173.242:4000/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    console.log('====---', localStorage.getItem('AUTH_TOKEN'));
    if(token==="null") {
      return {
        headers: {
          ...headers,
          authorization: 'no-token'
        }
      };
    }else
    {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : 'no-token'
        }
      };
    }
  });

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
