import React from 'react'
import { Link } from 'gatsby'

import PrototipeLogo from '../../assets/vectors/logo.svg'

function NavLogin() {
  
  return (
    <nav className="flex justify-center my-20">
      <Link to="/">
        <PrototipeLogo />
      </Link>
    </nav>
  )
}

export default NavLogin
