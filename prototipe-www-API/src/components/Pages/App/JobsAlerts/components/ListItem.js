import React from 'react'
import { Link } from 'gatsby'
import ReplyIcon from '@assets/vectors/reply.svg';
// import { navigate } from '@reach/router'

const AlertsListItem = (props) => {
  let alert = props.alert;
  console.log(alert);
  return (
    <li className="py-5 px-5 border-b-2 border-gray-dark">
        <Link rel="preload" crossorigin="anonymous" to={"/jobs-alerts/" + alert._id} >
        <div className="flex justify-between">

            <h4 className="text-blue font-semibold">{alert.name}</h4>
            <button><ReplyIcon /></button>
        </div>
        <div className="text-xs uppercase tracking-wide">
            <span className="text-yellow font-medium">Alert #{alert._id}</span> · <time className="text-gray-lighter">Posted on {alert.createdAt}</time>
        </div>
        <p className="font-medium">
          {alert.details}
          {alert.experience}
          {alert.expertises}
          {alert.details}</p>
        </Link>
    </li>
  )
}

export default AlertsListItem
