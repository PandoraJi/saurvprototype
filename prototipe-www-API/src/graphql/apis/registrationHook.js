import { useState, useEffect } from 'react';
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/react-hooks'
import { navigate } from '@reach/router'
import { AppUser } from '@auth'
const REGISTRATION = gql`
    mutation Register(
        $email: String!,
        $password: String!,
        $referralCode: String!,
        $role: String!
    ) {
        register(email: $email, password: $password, referralCode: $referralCode, role: $role) {
            userId,
            token,role
        }
    }
`;

export default function RegisterData({User}) {
  const [registering] = useMutation(REGISTRATION);
  return (
    registering({
      variables: {
        email: User.email,
        password: User.password,
        referralCode: User.referal_code,
        role: "user"
      }
      ,
      onCompleted: ({ register }) => {
        console.log('response', register);
        if (register.token) {
          localStorage.setItem('AUTH_TOKEN', register.token);
          localStorage.setItem('USER_ID', register.userId);
          AppUser.setUser(register);
          navigate('/dashboard');
        } else {
          // error;
          console.log("test");

        }

      },
      onError: (error) => {
        console.log(error.message);

      }
    })
  );
}

