import React, { useState } from 'react';
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '@auth'
import ArrowDown from '@assets/vectors/arrow-down.svg'


import { useQuery, gql } from '@apollo/client';
//import GET_USER from '@graphql/queries/user';
const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      fullName,
      emailSecondary,
      role
    }
  }
`;


function UserProfile({id}) {
    const { loading, error, data } = useQuery(GET_USER, {
      variables: { "id": id.toString() }
    });

    if (loading) return 'loading...';
    if (error) return `Error! ${error}`;

    return (
      <>
        <div className="flex flex-col items-end justify-center">
        <span className="text-sm text-white font-semibold">{data.user.fullName}</span>
        <span className="text-sm text-gray-light">{data.user.emailSecondary}</span>
        </div>

        <div className="flex justify-center content-center items-center">
          <div className="flex justify-center content-center items-center p-2 rounded-lg bg-blue mx-2">
          <span className="tracking-wide text-plus">{ data.user.fullName!=null && data.user.fullName.match(/\b(\w)/g).join('').toUpperCase()}</span>
          </div>
          <ArrowDown />
        </div>
      </>
    );
  }


function ProfileMenu() {
  const { logout, getCurrentUser } = AppUser

  const user = getCurrentUser();

  function logOut(e) {
    e.preventDefault()

    Auth.signOut()
      .then(logout(() => navigate('/login')))
      .catch(err => console.log('error: ', err))
  }

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu(status) {
    //('toggle menu')
    setMenuIsOpen(!status);
  }




  return (
    <div className="relative -mr-3">

        <button
        onClick={e => {toggleMenu(menuIsOpen)}}
        className="flex content-center items-center hover:bg-gray-dark p-3 rounded">
          <UserProfile id={user.userId} />
        </button>


        <div aria-hidden={(menuIsOpen ? 'false' : 'true')} className={(menuIsOpen ? 'visible' : 'hidden') + " absolute right-1 py-4 px-8 rounded bg-white mx-3 max-w-xs"} >
          <ul>
            <li className="text-gray-dark text-right text-base hover:text-red">
              <Link to="/profile">
                Account Settings
              </Link>
            </li>
            <li className="text-gray-dark text-right text-base hover:text-red">
              <button
                onClick={e => logOut(e)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default ProfileMenu
