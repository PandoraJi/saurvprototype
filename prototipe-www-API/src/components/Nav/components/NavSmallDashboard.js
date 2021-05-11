import React from 'react';
// import { Link } from 'gatsby'
// import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
// import { AppUser } from '@auth'

import NavListDashboard from './NavListDashboard'

function NavSmallDashboard(props) {
    const {menuIsOpen} = props;

    return (
        <div className={"nav-small "  + (menuIsOpen ? " is-open" : "") } >
            <div className="container mx-auto">
                <NavListDashboard styles={"nav-list--small"} isOpen={true} pageName={props.pageName} />
            </div>    
            <hr className="border-t-2 border-gray-dark mt-10" />
            <div className="container mx-auto">
                <div className="flex flex-row pt-8">
                    <div className="flex mr-2">
                        <div className="flex justify-center content-center items-center p-2 rounded-lg bg-blue mx-2 max-h-10">
                        <span className="tracking-wide text-plus">NM</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-sm text-white font-semibold">Nicolas Muino</span>
                        <span className="text-sm text-gray-light">MAIL@MAIL.COM</span>
                        <span className="text-sm text-red mt-4">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSmallDashboard
