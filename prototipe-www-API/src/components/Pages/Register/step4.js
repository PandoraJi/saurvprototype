import React, { useState }  from 'react'
import { Link } from 'gatsby'
import { LayoutLogin } from '@layout'
import ApplyingIcon from '@assets/vectors/icon-applying.svg'
// import { gql } from 'apollo-boost'
// import { useMutation } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/client'
import { AppUser } from '@auth'
import client from '@graphql/client';
import { useMutation, gql } from '@apollo/client';
import { navigate } from '@reach/router'

const REGISTRATION = gql`
    mutation Register(
        $email: String!,
        $password: String!,
        $referralCode: String!,
        $role: String!
    ) {
        register(email: $email, password: $password,referralCode:$referralCode,role:$role) {
            _id,email,role
        }
    }
`;

const ADDABOUTUSER = gql`
    mutation AddAboutUser($aboutType: AboutInput!) {
        addAboutUser(aboutType: $aboutType)
    }   
`;


const Step4 = (props) => {
  const [registerState, setLoginState] = useState({
    login: true,
    email: props!=null?props.userdetail.step_1.email:"testnew1@test.com",
    password:  props!=null?props.userdetail.step_1.password:"test",
    referralCode: props!=null?props.userdetail.step_1.referal_code:"",
    role: "user",
    aboutUser:false,
    id:'',
    aboutType:
      {
        id:'',
        fullName: props != null ? props.userdetail.step_3.first_name +"  "+ props.userdetail.step_3.last_name : "",
        phone: props != null ? props.userdetail.step_3.phone_number : "",
        address1: props != null ? props.userdetail.step_3.address_1 : "",
        address2: props != null ? props.userdetail.step_3.address_2 : "",
        city: props != null ? props.userdetail.step_3.city : "",
        state:props != null ? props.userdetail.step_3.state : {},
        // zip_code: props != null ? props.userdetail.step_3.zip_code : "",
        country:props != null ? props.userdetail.step_3.country : {},
        currentEmployer: props != null ? props.userdetail.step_3.current_employer : "",
        facebook: props != null ? props.userdetail.step_3.facebook : "",
        instagram: props != null ? props.userdetail.step_3.instagram : "",
        linkedin: props != null ? props.userdetail.step_3.linkedin : "",
        twitter: props != null ? props.userdetail.step_3.twitter : "",
        expertises:  props != null ? props.userdetail.step_3.expertises : [],
        skills: props != null ? props.userdetail.step_3.skills : [],
        regionalExperience: props != null ? props.userdetail.step_3.regional_experience : [],
        yourStoryAbout: props != null ? props.userdetail.step_3.your_story : "",
        emailSecondary: props != null ? props.userdetail.step_1.email : ""
      }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [registrationMutate] = useMutation(REGISTRATION, {
    variables: {
      email: registerState.email,
      password: registerState.password,
      referralCode:registerState.referralCode,
      role:registerState.role,
    },
    onCompleted: ({ register }) => {
    console.log(register);
      registerState.register=false;
      if(register)
      {
        if(registerState.aboutUser==false) {
          if(register._id)
          {
            registerState.id=register._id;
            registerState.aboutType.id=register._id;
            addUserMutate();
          }

        }
      }
    },
    onError:(error)=>{
      console.log(error.message);
      props.userdetail.stage='step-4';
      props.userdetail.error=error.message;

    }

  });
if(registerState.login==true) {
  registrationMutate();
}


  const [addUserMutate] = useMutation(ADDABOUTUSER, {
    variables: {
      aboutType: registerState.aboutType,
    },
    onCompleted: ({ message }) => {
      console.log(message);
      registerState.aboutUser=true;
    },
    onError:(error)=>{
      console.log(error.message);
      props.userdetail.stage='step-4';
      props.userdetail.error=error.message;

    }

  });



  return (
    // <ApolloProvider client={client}>
    <LayoutLogin>
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto" style={{minHeight: "calc(100vh - 430px)"}}>
        <ApplyingIcon className="mx-auto" />
        <h2 className="text-xlsmall md:text-lg mt-3 mb-4">Thanks for applying!</h2>
        <p>We’ll review your application and get back to you soon. In the meantime you can read our <span style={{color:'rgba(42, 153, 247)'}}>story</span>, learn more about <span style={{color:'rgba(42, 153, 247)'}}>what we do </span> or<span style={{color:'rgba(42, 153, 247)'}}> who we are.</span></p>
        <p>See you soon!</p>
      </div>

    </LayoutLogin>
    ///*</ApolloProvider>*/
  )
}

export default Step4
