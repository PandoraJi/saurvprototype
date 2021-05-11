import React from 'react'
import { Layout } from '@layout'
import { HowItWorksPage } from '@pages'


import { ApolloProvider } from '@apollo/client';
import client from '@graphql/client';

const HowItWorks = () => (
  <ApolloProvider client={client}>
  <Layout pageName="How it works">
    <HowItWorksPage />
  </Layout>
  </ApolloProvider>
)

export default HowItWorks
