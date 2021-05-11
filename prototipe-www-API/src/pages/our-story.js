import React from 'react'
import { Layout } from '@layout'
import { OurStoryPage } from '@pages'


import { ApolloProvider } from '@apollo/client';
import client from '@graphql/client';

const OurStory = () => (
  <ApolloProvider client={client}>
  <Layout pageName="Our Story">
    <OurStoryPage />
  </Layout>
  </ApolloProvider>
)

export default OurStory
