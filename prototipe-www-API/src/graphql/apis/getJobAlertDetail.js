import { gql, useQuery } from '@apollo/client'

const  GETJOBALERTDETAIL = gql`
  query GetJobAlert($id: ID!) {
    getJobAlert(id: $id) {
      id
      storyID
      story {
        id
        name
        type {
          name
        }
        budget
        description
        arenas {
          name
        }
        book
        talent
        venue
        userID
        user {
          id
          name
          lastName
          email
          phone
          country
          state
          city
          address1
          address2
          yourStoryAbout
          currentEmployer
          resume
          facebook
          instagram
          linkedin
          twitter
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      submisions {
        items {
          id
          alertID
          userID
          status
          description
          files
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

