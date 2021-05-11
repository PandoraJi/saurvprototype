import React, { useState, useEffect }   from 'react'
import { Link } from 'gatsby'
import { AppContent } from '@layout'
import { API, graphqlOperation } from 'aws-amplify'
import { getJobAlert } from '@graphql/queries'
import { gql, useQuery } from '@apollo/client'
const initialState = {

  name: 'Test',
  id: '',
  createdAt: '2021-01-01',
  details: '',
  story: {
    storyType: ``,
    name: ``,
    description: ``,
    arenas: [],
    notes: '',
    initials:''
  }
}
const  GETJOBALERTDETAIL = gql`
    query JobAlertDetailById($jobAlertId: String!) {
        jobAlertDetailById(jobAlertId: $jobAlertId) {
            _id,
            name,
            details,
#            skill,
#            expertises,
#            experience
        }
            
    }
`;


const JobAlertDetail = (props) => {
  const alertId=props.alertID;
  const [alert, setAlert] = useState(initialState);
  console.log('///run query');
  const { loading, error, data } = useQuery(GETJOBALERTDETAIL, {
    variables: { jobAlertId:alertId }
  });
  if (loading) {
    console.log("Loading");
  }
  if (error) {
    // setAlert(props);
    console.log(`Error! ${error}`);
  }
  if (!data)
  {
    // setAlert(props);
    console.log("Data Null")
  }
  else {
    console.log("alert:", data);

    if(data.jobAlertDetailById!=null)
    {
      alert.name=data.jobAlertDetailById.name!=null?data.jobAlertDetailById.name:"test";
      alert.details=data.jobAlertDetailById.details!=null?data.jobAlertDetailById.details:"test Detail";

    }
  }

  //


  return (
    <AppContent {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div className="flex-1">
          <h1 className="text-lg">{alert.name}</h1>
          <span className="text-sm text-gray-lighter"></span>
        </div>

        <button className="bg-red h-12 px-9 rounded mt-4 lg:mt-0">
          <Link  rel="preload" crossorigin="anonymous" to={"/jobs-alerts/" + alert.id + "/reply" }>
          Reply to Job Alert
          </Link>
        </button>

      </div>

      <article className="bg-gray-darker rounded p-8">
        <div className="text-xs uppercase font-medium mb-4">
          <span className="text-yellow">Alert #{alert.id}</span> · <time className="text-gray-lighter">Posted on {alert.createdAt}</time>
        </div>
        {alert.details}
      </article>

      <div className="flex justify-between items-center mt-10">
        <Link rel="preload" crossorigin="anonymous" to="/jobs-alerts" >
          <span className="font-semibold text-xs text-blue uppercase tracking-wide">Back to Job Alerts</span>
        </Link>

        <button className="bg-red h-12 px-9 rounded mt-4 lg:mt-0">
          <Link  rel="preload" crossorigin="anonymous" to={"/jobs-alerts/" +alertId + "/reply" }>
          Reply to Job Alert
          </Link>
        </button>
      </div>
    </AppContent>
  )
}

export default JobAlertDetail
