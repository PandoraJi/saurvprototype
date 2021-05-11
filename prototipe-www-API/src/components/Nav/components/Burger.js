import React from 'react';
// import { Link } from 'gatsby'
// import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
// import { AppUser } from '../../Auth'
import MenuOpen from '@assets/vectors/menu-open.svg';
import MenuClose from '@assets/vectors/menu-close.svg';

function Burger(props) {
    const {menu, menuIsOpen} = props;

  return (
    <div 
    onClick={e => menu.toggle(menuIsOpen) } 
    onKeyDown={e => menu.toggle(menuIsOpen) }
    role="button" tabIndex="0"
    className="nav-small-trigger">
        {menuIsOpen ? 
        <MenuClose /> :
        <MenuOpen />}
    </div>
  )
}

export default Burger
