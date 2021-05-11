import React from 'react'
import { Layout } from '@layout'
import { LeadershipPage } from '@pages'


import { ApolloProvider } from '@apollo/client';
import client from '@graphql/client';

const Leadership = () => (
  <ApolloProvider client={client}>
  <Layout pageName="Leadership">
    <LeadershipPage />
  </Layout>
  </ApolloProvider>
)

export default Leadership
