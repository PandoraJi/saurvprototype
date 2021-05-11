import React from 'react'
import { Link } from 'gatsby'

import IconDots from '@assets/vectors/dots.svg';
import IconPending from '@assets/vectors/referrals/pending.svg';
import IconCompleted from '@assets/vectors/referrals/completed.svg';

const ReferralsTable = (props) => {

  return (
    <div className="w-full bg-gray-darker rounded mt-10 overflow-scroll  border border-blue">
        <div className="p-7 py-5 flex justify-between">
         <h3>Invites Sent</h3>
        </div>
        <ul className="table w-full mb-7">
          <li className="table-row table-head h-7">
            <div className="table-cell align-middle border-gray-dark border-b-2 uppercase text-xs font-bold tracking-wide pl-7">email address</div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 uppercase text-xs font-bold tracking-wide ">status</div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 uppercase text-xs font-bold tracking-wide">invited on</div>
            <div className="table-cell align-middle border-gray-dark border-b-2 uppercase text-xs font-bold tracking-wide text-center">actions</div>
          </li>
          <li className="table-row h-14">
            <div className="table-cell align-middle border-gray-dark border-b-2 text-base pl-7">john.doe2@gmail.com</div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 text-base text-red"><div className="flex"><IconPending /> <span className="ml-2">Pending</span></div></div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 text-base">Oct 29, 2020 - 11:05 am</div>
            <div className="table-cell align-middle border-gray-dark border-b-2 text-center"><button className="mt-2"><IconDots /></button></div>
          </li>
          <li className="table-row h-14">
            <div className="table-cell align-middle border-gray-dark border-b-2 text-base pl-7">john.doe2@gmail.com</div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 text-base text-blue"><div className="flex"><IconCompleted /><span className="ml-2">Completed</span></div></div>
            <div className="hidden md:table-cell align-middle border-gray-dark border-b-2 text-base">Oct 29, 2020 - 11:05 am</div>
            <div className="table-cell align-middle border-gray-dark border-b-2 text-center"><button className="mt-2"><IconDots /></button></div>
          </li>
        </ul>

      </div>
  )
}

export default ReferralsTable
