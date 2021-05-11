import React from 'react';
import { Link } from 'gatsby'


//icons
import IconAlmanac from '@assets/vectors/nav/almanac.svg'
import IconDashboard from '@assets/vectors/nav/dashboard.svg'
import IconJobAlerts from '@assets/vectors/nav/jobs-alerts.svg'
import IconReferrals from '@assets/vectors/nav/referral.svg'
import IconSettings from '@assets/vectors/nav/settings.svg'
import IconSubmissions from '@assets/vectors/nav/submissions.svg'
import IconContact from '@assets/vectors/nav/contact.svg'


function NavListDashboard(props) {
  return (
    <nav className="flex flex-col flex-1 content-start justify-between lg:mt-16">
    <ul className={"flex-col" + (props.isOpen ? ' is-expanded' : 'is-compact')}>    
        <li className={"dash-nav-item" + (props.pageName === 'Dashboard' ? ' is-active' : '')}>
            <Link to="/dashboard">
            <IconDashboard className="inline" />
            {props.isOpen ? <span className="mx-2 font-bold">Dashboard</span> : null}
            </Link>
        </li>

        <li className={"dash-nav-item" + (props.pageName === 'Jobs Alerts' ? ' is-active' : '')}>
            <Link to="/jobs-alerts">
            <IconJobAlerts className="inline" />
            {props.isOpen ? <span className="mx-2 font-bold">Job Alerts</span> : null}
            </Link>
        </li>

        <li className={"dash-nav-item" + (props.pageName === 'Submissions' ? ' is-active' : '')}>
            <Link to="/submissions">
            <IconSubmissions className="inline" />
            {props.isOpen ? <span className="mx-2 font-bold">Submissions</span> : null}  
            </Link>
        </li>

        {/* <li className={"dash-nav-item" + (props.pageName === 'News' ? ' is-active' : '')}>
            <Link to="/news">
            <IconAlmanac className="inline" />  
            {props.isOpen ? <span className="mx-2 font-bold">News</span> : null}
            </Link>
        </li>

        <li className={"dash-nav-item" + (props.pageName === 'Prototipe Newswire' ? ' is-active' : '')}>
            <Link to="/newswire">
            <IconSubmissions className="inline" /> 
            {props.isOpen ? <span className="mx-2 font-bold">Prototipe Newswire</span> : null} 
            </Link>
        </li> */}

        <li className={"dash-nav-item" + (props.pageName === 'Referrals' ? ' is-active' : '')}>
            <Link to="/referrals">
            <IconReferrals className="inline" />  
            {props.isOpen ? <span className="mx-2 font-bold">Referrals</span> : null}
            </Link>
        </li>
    </ul>

    <ul className={"flex-col" + (props.isOpen ? ' is-expanded' : 'is-compact')}>
        <li className={"dash-nav-item" + (props.pageName === 'Profile' ? ' is-active' : '')}>
            <Link to="/profile">
            <IconSettings className="inline" />  
            {props.isOpen ? <span className="mx-2 font-bold">Settings</span> : null}
            </Link>
        </li>
        <li className={"dash-nav-item" + (props.pageName === 'Contact Us' ? ' is-active' : '')}>
            <Link to="/contact-us">
            <IconContact className="inline" />  
            {props.isOpen ? <span className="mx-2 font-bold">Contact Us</span> : null}
            </Link>
        </li>
    </ul>
    </nav>
  )
}

export default NavListDashboard

// import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
// import { AppUser } from '../../Auth'

//   const { logout, getCurrentUser, isLoggedIn } = AppUser
  
//   const user = getCurrentUser();

//   function logOut(e) {
//     e.preventDefault()

//     Auth.signOut()
//       .then(logout(() => navigate('/login')))
//       .catch(err => console.log('error: ', err))
//   }