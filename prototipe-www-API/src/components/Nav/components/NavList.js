import React from 'react';
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '../../Auth'

function NavList(props) {
  const { logout, isLoggedIn } = AppUser

//   const user = getCurrentUser();

  function logOut(e) {
    e.preventDefault()

    Auth.signOut()
      .then(logout(() => navigate('/login')))
      .catch(err => console.log('error: ', err))
  }

  return (
    <ul  className={props.styles}>

        <li  className={(props.pageName === 'Our Story' ? ['is-active','active'] : '')}>
            <Link to="/our-story">
            <span>Our Story</span>
            </Link>
        </li>
        <li  className={(props.pageName === 'How it works' ? ['is-active','active'] : '')}>
            <Link to="/how-it-works">
            <span>How it works</span>
            </Link>
        </li>
        <li  className={(props.pageName === 'Leadership' ? ['is-active','active'] : '')}>
            <Link to="/leadership">
            <span>Leadership</span>
            </Link>
        </li>


        {isLoggedIn() ?
        (<>
            <li >
                <Link to="/dashboard">
                <span>Dashboard</span>
                </Link>
            </li>
            <li >
                <button onClick={e => logOut(e)}>
                Logout
                </button>
            </li>
        </>)
        :
        (<>
            <li >
              <button primary><Link to="/register" className="btn bg-red">Register </Link></button>
              <button  secondary> <Link to="/login" className="ml-5 btn bg-blue">Login </Link></button>
            </li>
        </>)
        }

    </ul>
  )
}

export default NavList
