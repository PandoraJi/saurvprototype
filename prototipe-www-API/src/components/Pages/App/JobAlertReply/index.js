import React, { useState, useEffect }   from 'react'
import { Link } from 'gatsby'

import { AppContent } from '@layout'
import { API, graphqlOperation } from 'aws-amplify'
import { getJobAlert } from '@graphql/queries'

import { InputText, InputTextArea } from '@forms'
import IconUpload from '@assets/vectors/upload.svg';
import { gql, useQuery } from '@apollo/client'
const initialState = {

  title: 'Test',
  id: '',
  createdAt: '2021-01-01',
  auth_code: '',
  story: {
    storyType: ``,
    name: ``,
    description: ``,
    arenas: [],
    notes: '',
    storyinitials:''
  }
}

const  GETJOBALERTDETAILREPLY = gql`
    query replyAdded($userId: String!,$jobAlertId:String!) {
        replies(userId: $userId,jobAlertId:$jobAlertId) {
            _id
            jobAlertId,
            userId,
            message
        }
    }
`;
const JobAlertReply = (props) => {
  let alertId=props.alertID;
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(initialState);
 const userId= localStorage.getItem('USER_ID');
    console.log(alertId);
  // setAlert({
  //   ...alert,
  //   id: alertId
  // });

  const handleUpdate = event => {
    setAlert({
      ...alert,
      [event.target.name]: event.target.value
    });
  };
  const handleUpdateNotes = event => {
    alert.story.notes= event.target.value
  };
  const handleUpdateInitials = event => {
    alert.story.initials= event.target.value
  };
  const handleJobAlert = async e => {
    e.preventDefault()
    if(validate()) {

      console.log('saving...', isLoading);

    }
  };
  const validate= () => {

    let errors = [];
    let isValid = true;

    if (!alert.story.notes) {
      isValid = false;
      errors.push("Please enter your notes.");
      alert.story.noteserror = "Please enter notes";
    } else if (typeof alert.story.notes == "undefined") {
      isValid = false;
      errors.push("Please enter your notes.");
      alert.story.noteserror = "Please enter notes";
    } else {
      alert.story.noteserror = "";
    }

    if (!alert.story.storyinitials) {
      isValid = false;
      errors.push("Please enter your Initials.");
      alert.story.storyinitialserror = "Please enter Initials";
    } else if (typeof alert.story.storyinitials == "undefined") {
      isValid = false;
      errors.push("Please enter your Initials.");
      alert.story.storyinitialserror = "Please enter Initials";
    } else {
      alert.story.storyinitialserror = "";
    }

    setAlert({
      ...alert,
      errors
    });

    return isValid;
  }


  const { loading, error, data } = useQuery(GETJOBALERTDETAILREPLY, {
    variables: { userId:userId,jobAlertId:alertId }
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

    console.log("Data Null")
  }
  else {

    console.log("alert:", data);
    if(data.replies.length>0)
    {
      console.log("No Data");
    }

  }


  // async function fetchAlert() {
  //   console.log('///fetch alert');
  //   try {
  //     const alertData = await API.graphql(graphqlOperation(getJobAlert, { id: props.alertID }));
  //     const alert = alertData.data.getJobAlert;
  //     // console.log("alert:",alert);
  //     setAlert(alert);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     console.log('error fetching alert...') }
  // }
  //
  //
  // useEffect(() => {
  //   fetchAlert()
  // }, []);


  // if(isLoading === true) {
  //   return (
  //   <AppContent {...props}>
  //     <div>Loading...</div>
  //   </AppContent>
  //   )
  // }

  return (
    <AppContent {...props}>

      <div className="flex flex-row justify-between mb-8">
        <div className="flex-1">
          <h1 className="text-lg">{alert.title}</h1>
          <span className="text-sm text-gray-lighter"></span>
        </div>
        <div></div>
      </div>

      <div className="w-full bg-gray-darker rounded  border border-blue">
        <div className="p-7 md:p-14 py-6 md:py-11 flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-md text-gray-lighter font-semibold mb-10">
              Project Type
            </h4>

            <div className="text-xs uppercase font-medium mb-4">
              <span className="text-yellow">Alert #{alert.id}</span> ·{' '}
              <time className="text-gray-lighter">Posted on {alert.createdAt}</time>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5">
              <div className="grid alert-detail gap-3 mb-8">
                <div className="alert-detail--title">Type of Story</div>
                <div className="alert-detail--value">
                {alert.story.storyType}
                </div>

                <div className="alert-detail--title">Budget</div>
                <div className="alert-detail--value">${alert.story.budget}</div>

                <div className="alert-detail--title">Full Name</div>
                <div className="alert-detail--value">
                  {alert.story.name}
                </div>

                <div className="alert-detail--title">Project Story</div>
                <div className="alert-detail--value">
                  {alert.story.description}
                </div>

                <div className="alert-detail--title">Arenas</div>
                <div className="alert-detail--value">
                  <ul className="pills">
                    {alert.story.arenas && alert.story.arenas.map( (arena, index) => (
                      <li>{arena.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 lg:ml-8">
              <InputTextArea

                label={'Notes'}
                name={'notes'}
                value={alert.story.notes}
                id={'notes'}
                handleUpdate={handleUpdateNotes}
                errorContent={alert.story.noteserror}
                placeholder={'Project Name'}
              />

              <div className="form-group">
                <label htmlFor="files">Files</label>
                <div className="mt-1">
                  <div className="rounded border-blue border bg-none text-blue h-24 px-4 flex flex-col justify-center items-center">
                    <IconUpload />
                    <span>Drop Files here or Browse</span>
                  </div>
                </div>
              </div>

              <InputText
                label={'Initials'}
                name={'storyinitials'}
                value={alert.story.storyinitials}
                id={'storyinitials'}
                errorContent={alert.story.storyinitialserror}
                handleUpdate={handleUpdateInitials}
                placeholder={'Type your story initials to agree'}
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="p-10 flex flex-col md:flex-row justify-between items-center">
          <span className="flex-1">
            By submitting this story, you agree to our current{' '}
            <Link rel="preload" crossorigin="anonymous" to="/terms">terms/conditions</Link>
          </span>
          <button className="btn bg-red w-full md:w-auto mt-4 md:mt-0"  onClick={handleJobAlert}>Submit Story</button>
        </div>
      </div>
    </AppContent>
  )
}

export default JobAlertReply
