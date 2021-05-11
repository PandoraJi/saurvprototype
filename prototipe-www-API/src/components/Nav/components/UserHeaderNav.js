import React from 'react'

import ToggleMenu from './UserHeaderToggleMenu'
import ProfileMenu from './UserHeaderProfileMenu'

function UserHeaderNav(props) {
  return (
      <header className="dash-head hidden lg:flex justify-between items-center">
        <ToggleMenu handle={props.toggleSidebar} isOpen={props.isOpen} pageName={props.pageName}/>
        <ProfileMenu />
      </header>
  )
}

export default UserHeaderNav
