import React from 'react'
import { Link } from 'gatsby'
import ReplyIcon from '../../../../../assets/vectors/reply.svg';
import SubmissionItem from './ListItem'


const SubmissionsList = (props) => {

  return (

    <ul className="overflow-scroll">
        <SubmissionItem title={"Production company with network mandate"} status={"pending"} alertId={"105"} time={"Oct 19, 2020"} alertText={"We are in search of a small-time oil wildcatter (it can be an individual, family, or a small group of guys/girls) that have basically put…"} />
        <SubmissionItem title={"Production company with network mandate"} status={"awarded"} alertId={"105"} time={"Oct 19, 2020"} alertText={"We are in search of a small-time oil wildcatter (it can be an individual, family, or a small group of guys/girls) that have basically put…"} />
        <SubmissionItem title={"Production company with network mandate"} status={"pending"} alertId={"105"} time={"Oct 19, 2020"} alertText={"We are in search of a small-time oil wildcatter (it can be an individual, family, or a small group of guys/girls) that have basically put…"} />
        <SubmissionItem title={"Production company with network mandate"} status={"awarded"} alertId={"105"} time={"Oct 19, 2020"} alertText={"We are in search of a small-time oil wildcatter (it can be an individual, family, or a small group of guys/girls) that have basically put…"} />
    </ul>
  )
}

export default SubmissionsList
