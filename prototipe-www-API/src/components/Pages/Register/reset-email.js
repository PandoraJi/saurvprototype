import React, { useState }  from 'react'
import { Link } from 'gatsby'
import { LayoutLogin } from '@layout'
import client from '@graphql/client';
import { ApolloProvider } from '@apollo/client'
import { AppUser } from '@auth'
import { useMutation, gql } from '@apollo/client';
import { navigate } from '@reach/router'
import { Form } from 'semantic-ui-react'
const ForGotMutation = gql`
    mutation ForgotPassword(
        $email: String!,
    ) {
        forgotPassword(email: $email)
    }
`;
const ForGotSubmitMutation = gql`
    mutation ResetPassword(
        $token: String!,
        $password: String!,
    ) {
        resetPassword(token: $token,password:$password) 
    }
`;


const VERIFYEMAILSUBMIT = gql`
    mutation emailVerify(
        $token: String!
    ) {
        emailVerify(token: $token) 
    }
`;

const CONFIRMEMAILSUBMIT = gql`
    mutation ConfirmEmail(
        $email: String!,
    ) {
        confirmEmail(,email:$email) 
    }
`;

const Step8 = (props) => {
  console.log(props);
let loading=false
  const [forgotMutate] = useMutation(ForGotMutation,{
      variables: {
        email:props!=null?props.useremail.email:"testemail@test.com",
      },
      onCompleted: ({ data }) => {

          navigate('/reset')
          console.log('response',"Please click the link sent to your Email");
          props.useremail.error="Please click the link sent to your Email";
          props.useremail.loading=false;
          props.useremail.stage=0;


      },
      onError:(error)=>{
        navigate('/reset')
        props.useremail.error=error.message;
        props.useremail.stage=0;
        props.useremail.loading=false;
      }
    }
  );
  const [forgotSubmitMutate] = useMutation(ForGotSubmitMutation,{
      variables: {
        token:props!=null?props.useremail.auth_code:"",
        password:props!=null?props.useremail.password:""
      },
      onCompleted: ({ user }) => {
        console.log('response', user);
        navigate('/login')
      },
      onError:(error)=>{
        console.log(error.message);
        props.useremail.error=error.message;
        props.useremail.stage=1;
        props.useremail.loading=false;
        navigate('/password_reset/'+props.useremail.auth_code);
      }
    }
  );


  const [emailVerifyMutate] = useMutation(VERIFYEMAILSUBMIT,{
      variables: {
        token:props!=null?props.useremail.auth_code:"",
      },
      onCompleted: ({ user }) => {
        console.log('response', user);
        navigate('/login')
      },
      onError:(error)=>{
        console.log(error.message);
        props.useremail.error=error.message;
        props.useremail.stage=1;
        props.useremail.loading=false;
        navigate('/confirm-email-submit/'+props.useremail.auth_code);
      }
    }
  );

  const [emailConfirmMutate] = useMutation(CONFIRMEMAILSUBMIT,{
      variables: {
        email:props!=null?props.useremail.email:"testemail@test.com",
      },
      onCompleted: ({ user }) => {
        console.log(user);
        navigate('/confirm-email');
        console.log('response',"Please click the link sent to your Email");
        props.useremail.error="Please click the link sent to your Email";
        props.useremail.loading=false;
        props.useremail.stage=0;
      },
      onError:(error)=>{
        console.log(error.message);
        props.useremail.error=error.message;
        props.useremail.stage=0;
        props.useremail.loading=false;
        navigate('/confirm-email');
      }
    }
  );


  if(props!=null) {
    if (props.useremail.type == "reset") {
      forgotMutate();
    } else if (props.useremail.type == "reset-submit")
    {
      forgotSubmitMutate();
    }
    else if(props.useremail.type == "confirmEmail")
    {
      emailConfirmMutate();
    }
    else if(props.useremail.type == "verifyEmail")
    {
      emailVerifyMutate();
    }
      }





  return (

    <LayoutLogin>
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      )}

    </LayoutLogin>

  )
}

export default Step8
