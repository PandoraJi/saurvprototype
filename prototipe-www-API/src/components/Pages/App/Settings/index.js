import React from 'react'
import { Link } from 'gatsby'

import { AppContent } from '../../../Layout'

const Settings = (props) => {
  return (

      <AppContent  {...props}>
        <h1>Here's the Settings Page</h1>
        <Link rel="preload" crossorigin="anonymous" to="/dashboard">Home</Link>
      </AppContent>
  )
}

export default Settings
