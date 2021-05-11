import React from 'react'
import { Redirect } from '@reach/router'
import { AppUser } from '../Auth'
// import { Layout } from '../Layout'

class PublicRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    const { isLoggedIn } = AppUser
    if (isLoggedIn()) {
      return <Redirect to="/dashboard" noThrow />
    }
    const { component: Component, location, ...rest } = this.props
    return (
        <Component {...rest} />
    )
  }
}

export default PublicRoute
