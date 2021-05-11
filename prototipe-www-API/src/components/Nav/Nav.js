import React, { useState }  from 'react'
import { Link } from 'gatsby'
// import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
// import { AppUser } from '../Auth'

import NavList from './components/NavList';
import NavSmall from './components/NavSmall';
import Burger from './components/Burger';
import PrototipeLogo from '../../assets/vectors/logo.svg';

function Nav(props) {
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
      <nav className="nav">
        <Link to="/">
          <PrototipeLogo className="nav-logo"/>
        </Link>
        <NavList pageName={props.pageName} styles={"nav-list"} />
        <Burger menu={menuHandler} menuIsOpen={menuIsOpen}/>
      </nav>
      <NavSmall menuIsOpen={menuIsOpen} pageName={props.pageName}/>
    </>
  )
}

export default Nav
