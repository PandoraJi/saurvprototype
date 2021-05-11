import React from 'react';
// import { Link } from 'gatsby'
// import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
// import { AppUser } from '@auth'

import NavList from './NavList'

function NavSmall(props) {
    const {menuIsOpen} = props;

    return (
        <div className={"nav-small "  + (menuIsOpen ? "is-open" : "") } >
            <div className="container mx-auto">
            <NavList styles={"nav-list--small"} pageName={props.pageName} />
            </div>
        </div>
    )
}

export default NavSmall
