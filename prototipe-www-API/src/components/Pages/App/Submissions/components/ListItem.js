import React from 'react'
import { Link } from 'gatsby'
import IconDots from '@assets/vectors/dots.svg'
import IconPending from '@assets/vectors/referrals/pending.svg'
import IconCompleted from '@assets/vectors/referrals/completed.svg'

const SubmissionItem = (props) => {
  return (
    <li className="py-5 px-5 border-b-2 border-gray-dark">
      <div className="flex justify-between">
        <h4 className="text-blue font-semibold">{props.title}</h4>
        <div className="flex items-end">
          {props.status === "pending" ?
            <div className="text-red uppercase text-xs font-semibold flex justify-center items-center mr-4">
              <IconPending className="w-5 mr-2" /> Pending
            </div>
          : (
            <div className="text-blue uppercase text-xs font-semibold flex justify-center items-center mr-4">
              <IconCompleted className="w-5 mr-2" /> Awarded
            </div>
          )}

          <button>
            <IconDots />
          </button>
        </div>
      </div>
      <div className="text-xs uppercase tracking-wide">
        <span className="text-yellow font-medium">Alert #{props.alertId}</span>{' '}
        · <time className="text-gray-lighter">Posted on {props.time}</time>
      </div>
      <p className="font-medium">{props.alertText}</p>
    </li>
  )
}

export default SubmissionItem
