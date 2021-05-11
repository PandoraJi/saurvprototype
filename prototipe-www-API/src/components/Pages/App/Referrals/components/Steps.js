import React from 'react'
// import { Link } from 'gatsby'

import IconSend from '@assets/vectors/referrals/send.svg'
import IconRegister from '@assets/vectors/referrals/register.svg'
import IconAward from '@assets/vectors/referrals/award.svg'

const ReferralsTable = (props) => {
  return (
    <ul className="flex flex-col md:flex-row justify-center">
      <li className="flex flex-col justify-center items-center mb-10 md:mb-0">
        <div
          className="bg-gray rounded-full flex flex-col justify-center items-center"
          style={{ width: '122px', height: '122px' }}
        >
          <IconSend />
        </div>
        <h4 className="text-plus2 text-blue font-semibold my-4">
          Send Invites
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          scelerisque enim.
        </p>
      </li>

      <li className="flex flex-col justify-center items-center mb-10 md:mb-0">
        <div
          className="bg-gray rounded-full flex flex-col justify-center items-center"
          style={{ width: '122px', height: '122px' }}
        >
          <IconRegister />
        </div>
        <h4 className="text-plus2 text-blue font-semibold my-4">
          Registration
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          scelerisque enim.
        </p>
      </li>
      <li className="flex flex-col justify-center items-center">
        <div
          className="bg-gray rounded-full flex flex-col justify-center items-center"
          style={{ width: '122px', height: '122px' }}
        >
          <IconAward />
        </div>
        <h4 className="text-plus2 text-blue font-semibold my-4">Lorem ipsum</h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          scelerisque enim.
        </p>
      </li>
    </ul>
  )
}

export default ReferralsTable
