import React, { useState } from 'react';
import { Router } from '@reach/router'
import {
  Reset,
  Login,
  Register,
  ConfirmEmail
} from '@pages'
// import {Step4} from '@register'
import {
  Dashboard,
  JobsAlerts,
  JobAlertDetail,
  JobAlertReply,
  News,
  Newswire,
  NewsWireDetail,
  IndexPage,
  Profile,
  Referrals,
  Submissions,
  SubmitStory,
  Settings,
  GetAlertJobDetails
} from '@app'

import PrivateRoute from '../components/Routes/PrivateRoute'
import PublicRoute from '../components/Routes/PublicRoute'
import { ApolloProvider } from '@apollo/client';
import client from '@graphql/client';


const App = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  function toggleSidebar(status) {
    setSidebarIsOpen(!status);
  }

  return (
    <ApolloProvider client={client}>
    <Router>
      <PrivateRoute pageName="Dashboard" path="/dashboard" component={Dashboard} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Profile" path="/profile" component={Profile} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Job Alert Reply" path="/jobs-alerts/:alertID/reply" component={JobAlertReply} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Job Alert Detail" path="/jobs-alerts/:alertID" component={JobAlertDetail} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Jobs Alerts" path="/jobs-alerts" component={JobsAlerts} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="News" path="/news" component={News} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Prototipe Newswire" path="/newswire" component={Newswire} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Prototipe Newswire Detail" path="/newswire/:id" component={NewsWireDetail} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Referrals" path="/referrals" component={Referrals} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Submissions" path="/submissions" component={Submissions} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Submit a Story" path="/submit-story" component={SubmitStory} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PrivateRoute pageName="Settings" path="/settings" component={Settings} sidebar={sidebarIsOpen} handleSidebar={toggleSidebar}/>
      <PublicRoute pageName="Register" path="/register" component={Register} />
      {/*<PublicRoute pageName="Register" path="/signup" component={Step4} />*/}
      <PublicRoute pageName="Confirm" path="/confirm-email" component={ConfirmEmail} />
      <PublicRoute pageName="Login" path="/login" component={Login} />
      <PublicRoute pageName="Reset" path="/reset" component={Reset} />
      <PublicRoute path="/password_reset/:token" component={Reset} />
      <PublicRoute pageName="Confirm" path="/confirm-email-submit/:token" component={ConfirmEmail} />
       <PublicRoute path="/" component={IndexPage} />

    </Router>
    </ApolloProvider>
  )
}

export default App
