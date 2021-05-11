import React from 'react'
import { Redirect } from '@reach/router'
import { AppUser } from '../Auth'

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    const { isLoggedIn } = AppUser
    if (!isLoggedIn()) {
      return <Redirect to="/login" noThrow />
    }
    const { component: Component, location, ...rest } = this.props
    //console.log("private", location);
    return (
        <Component {...rest} isUserNav={true} />
    )
  }
}

export default PrivateRoute
