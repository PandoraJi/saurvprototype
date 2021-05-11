import React from 'react'
import SEO from '@components/SEO'
import { Container, Header } from 'semantic-ui-react'
const IndexPage = () => {
  return (
    <>
    <SEO />
      {/*<Container text>*/}
      {/*  <Header as='h1'>Identify the Stories. Connect the Talent.<br />*/}
      {/*    Create the Opportunity.</Header>*/}
      {/*  <p>*/}
      {/*    We are the content nexus between freelancers, Hollywood and the greater creative community.*/}
      {/*  </p>*/}
      {/*</Container>*/}
    <div className="hero home__hero">
      <h1 className="font-bold">Identify the Stories. Connect the Talent.<br />
      Create the Opportunity.
      </h1>
      <p className="text-base lg:text-md font-medium">We are the content nexus between freelancers, Hollywood and the greater creative community.</p>
    </div>
    </>
  )
}

export default IndexPage
