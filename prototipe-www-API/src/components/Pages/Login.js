import React, { useState }  from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '@auth'

import { AuthForm, Email, Password } from '@forms'

import { LayoutLogin } from '../Layout'

// Mutations
import { useMutation, gql } from '@apollo/client';
import { InputText } from '../Forms'
 // import LOGIN from '@graphql/mutations/login';
const LOGIN = gql`
mutation Login(
  $email: String!, 
  $password: String!
) {
  login(email: $email, password: $password) {
      userId,
      token,role
  }
}
`;

const Login = () => {
  const [loginState, setLoginState] = useState({
    login: true,
    email: '',
    password: '',

  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = event => {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value
    });
  };



  const [loginMutate] = useMutation(LOGIN, {
    variables: {
      email: loginState.email,
      password: loginState.password
    },
    onCompleted: ({ login }) => {
      console.log('response', login);

      if(login.token) {
        localStorage.setItem('AUTH_TOKEN', login.token);
        localStorage.setItem('USER_ID', login.userId);
        AppUser.setUser(login);
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

  const handleLogin = async e => {
    e.preventDefault()
    if(validate()) {
      setIsLoading(true);
      setError(null);
      console.log('login...', isLoading);
      await loginMutate();
    }
  };


  const validate= () =>
  {

    let errors = [];
    let isValid = true;

    if (!loginState.password) {
      isValid = false;
      errors.push("Please enter your Password.");
      loginState.passworderror = "Please enter Password";
    }
   else if (typeof loginState.password == "undefined") {
      isValid = false;
      errors.push( "Please enter your Password.");
      loginState.passworderror = "Please enter Password";
    }
   else {
      loginState.passworderror ="";
    }
    if (!loginState.email) {
      isValid = false;
      errors.push("Please enter your email Address.");
      loginState.emailerror = "Please enter email Address";
    }else
    if (typeof loginState.email !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(loginState.email)) {
        isValid = false;
        errors.push("Please enter valid email address.");
        loginState.emailerror = "Please enter email Address";
      }
    } else {
      loginState.emailerror ="";
    }

    setLoginState({
      ...loginState,
      errors
    });
    setError(errors);
    return isValid;
  }

  return (
      <LayoutLogin>
        <div className="login-wrap mx-auto text-center">
        <AuthForm title="Welcome. Login here." >
          <Email
            handleUpdate={handleUpdate}
            label={"Email"}
            name={"email"}
            value={loginState.email}
            id={"email"}
            placeholder={"Email"}
            errorContent={loginState.emailerror}
            email={loginState.email}
            autoComplete="on"
          />
          <Password
            handleUpdate={handleUpdate}
            password={loginState.password}
            type="password"
            label={"Password"}
            name={"password"}
            value={loginState.password}
            id={"password"}
            placeholder={"Password"}
            errorContent={loginState.passworderror}
            autoComplete="on"
          />

            {error!=null ? '' : ''}
            {error &&  (
            <div title="Show Error">
              <span
                aria-hidden="true"
              >{error}</span> </div>
            )}
          <button
            onClick={handleLogin}
            type="submit"
            disabled={isLoading}
            className="btn bg-red w-full mt-2 mb-5"
          >
            {isLoading ? 'Loading...' : 'Sign In'}
            {isLoading && (
              <span
                role="status"
                aria-hidden="true"
              />
            )}
          </button>

          <div className="flex flex-row justify-between">
          <p className="font-bold text-sm">
          Invited? <Link rel="preload" crossorigin="anonymous" to="/register">Enter your referral code</Link>
          </p>
          <p className="font-bold text-sm">
          <Link  rel="preload" crossorigin="anonymous" to="/reset">Forgot your password?</Link>
          </p>
          </div>

        </AuthForm>
        </div>
      </LayoutLogin>
  );
};

export default Login;
