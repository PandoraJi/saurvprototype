// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { gql } from '@apollo/client'


// 2
const mutation = gql`
    mutation LoginLinkMutation(
        $email: String!,
        $password: String!
    ) {
        login(email: $email, password: $password) {
            userId,
            token,role
        }
    }
`;

// 3
export default (email, password, callback) => {
  // 4
  const variables = {
    input: {
      email,
      password
    },
  }

  // 5
  commitMutation(
    {
      mutation,
      variables,
      // 6
      onCompleted: (user) => {
        callback(user)
      },
      onError: err => console.error(err),
    },
  )
}
