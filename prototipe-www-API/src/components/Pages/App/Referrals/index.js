import React, { useState } from 'react'
import { Link } from 'gatsby'

import { AppContent } from '../../../Layout'
import { AuthForm, Email, Password } from '@forms'
import ReferralsSteps from './components/Steps';
import ReferralsTable from './components/Table';
import { gql, useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
const REFERRALSUBMIT = gql`
    mutation SendReferral(
        $referralType: referralInput!,
    ) {
        sendReferral(referralType: $referralType) {
           message
        }
    }
`;
const Referrals = (props) => {
  const [referralState, setReferralState] = useState({
    referral: true,
    email: '',
    errors:"",
    userId:""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = event => {
    setReferralState({
      ...referralState,
      [event.target.name]: event.target.value
    });
  };
  const [referralMutate] = useMutation(REFERRALSUBMIT, {
    variables: {
      referralType:
        {
          userId: localStorage.getItem('USER_ID'),
          email: referralState.email
        }
    },
    onCompleted: ({ referral }) => {
      console.log('response', referral);

      if(referral) {
        setError(null);
        setIsLoading(false);
        navigate('/dashboard');
      } else {
        // error;
        setError('error');
        setIsLoading(false);
      }

    },
    onError:(error)=>{
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }

  });

  const handlereferral = async e => {
    e.preventDefault()
    if(validate()) {
      setIsLoading(true);
      setError(null);
      console.log('referral...', isLoading);
      await referralMutate();
    }
  };


  const validate= () =>
  {

    let errors = [];
    let isValid = true;
console.log(referralState.email);
    if (!referralState.email) {
      isValid = false;
      errors.push("Please enter your email Address.");
      referralState.emailerror = "Please enter email Address";
    }else
    if (typeof referralState.email !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(referralState.email.indexOf(',') !==-1)
      {
        let emailIds=referralState.email.split(',');
        for(let item=0; item<emailIds.length; item++)
        {
          if (!pattern.test(emailIds[item])) {
            isValid = false;
            errors.push("Please enter valid email address.");
            referralState.emailerror = "Please enter email Address";
          }
          else
          {
            referralState.emailerror ="";
          }

        }


      }else {
        if (!pattern.test(referralState.email)) {
          isValid = false;
          errors.push("Please enter valid email address.");
          referralState.emailerror = "Please enter email Address";
        }
        else {
          referralState.emailerror ="";
        }
      }
    } else {
      referralState.emailerror ="";
    }

    setReferralState({
      ...setReferralState,
      errors
    });
    setError(errors);
    return isValid;
  }

  return (
    <AppContent {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div>
          <h1 className="text-lg">Referrals</h1>
          <span className="text-sm text-gray-lighter">
            Invite colleagues to Prototipe.media
          </span>
        </div>

        <div></div>
      </div>

      <div className="w-full bg-gray-darker rounded  border border-blue">
        <div className="p-7 md:p-14 py-6 md:py-11 flex justify-between">
          <ReferralsSteps />
        </div>

        <hr />

        <div className="p-7 md:p-14 py-6 md:py-11 text-left">
          <h4 className="text-md text-gray-lighter font-semibold">Invite Colleagues</h4>
          <p className="text-sm text-white">You can enter multiple email addresses, separated by a ‘,’</p>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 referral-email">

            <Email
              className="bg-white rounded p-3 w-full flex-1"
              handleUpdate={handleUpdate}
              label={"Email"}
              name={"email"}
              id={"email"}
              value={referralState.email}
              placeholder="Email addresses..."
              errorContent={referralState.emailerror}
              email={referralState.email}
              autoComplete="on"
            />
            <button className="btn bg-red w-full md:w-auto mt-3 md:mt-0 md:ml-3" onClick={handlereferral}>Send invites</button>
          </div>
          {error!=null ? '' : ''}
          {error &&  (
            <div className="flex flex-col md:flex-row justify-between items-center mt-4" title="Show Error">
              <span
                aria-hidden="true"
              >{error}</span> </div>
          )}

        </div>
      </div>

      <ReferralsTable />

       <Link  rel="preload" crossorigin="anonymous" to="/dashboard">Home</Link>
    </AppContent>
  )
}

export default Referrals
