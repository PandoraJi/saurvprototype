import React from 'react'
import { LayoutHome } from '@layout'
import { IndexPage } from '@pages'
import {Button} from 'semantic-ui-react'
import { ApolloProvider } from '@apollo/client';
import client from '@graphql/client';

const Home = () => (
  <ApolloProvider client={client}>
  <LayoutHome>
    <IndexPage />
  </LayoutHome>
  </ApolloProvider>
)

export default Home
