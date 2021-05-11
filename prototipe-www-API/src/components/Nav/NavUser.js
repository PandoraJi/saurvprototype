import React, { useState }  from 'react'
import { Link } from 'gatsby'

import PrototipeLogo from '../../assets/vectors/logo.svg'
import PrototipeLogoSmall from '../../assets/vectors/icon-ip.svg'

import NavSmallDashboard from './components/NavSmallDashboard'
import NavListDashboard from './components/NavListDashboard'
import Burger from './components/Burger';


function UserSideNav(props) {
  //console.log("userSideNav", props);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = {
    toggle: function (status) {
      setMenuIsOpen(!status);
    },
    close: function(){
      setMenuIsOpen(false);
    },
    open: function(){
      setMenuIsOpen(true);
    }
  }
  return (
    <>
      <div id="HeaderSmall" className="lg:hidden container mx-auto">
        <nav className="nav">
          <Link to="/">
            <PrototipeLogo className="nav-logo"/>
          </Link>
          <Burger menu={menuHandler} menuIsOpen={menuIsOpen}/>
        </nav>
        <NavSmallDashboard menuIsOpen={menuIsOpen} pageName={props.pageName}/>
      </div>

      <aside id="SidebarNav" className={"dash-nav hidden lg:flex flex-col bg-gray-darker " + (props.isOpen ? "is-expanded" : "is-compact")} >
          {props.isOpen ? <PrototipeLogo className="max-w-full" /> : <PrototipeLogoSmall style={{width:'64px', height: '40px'}} />}
          <NavListDashboard isOpen={props.isOpen} pageName={props.pageName} styles={"list-large"} /> 
      </aside>
    </>
  )
}

export default UserSideNav
