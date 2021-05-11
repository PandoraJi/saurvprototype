import { gql, useQuery } from '@apollo/client'
const GET_USERSABOUT = gql`
    query AboutUser {
        aboutUserDetails {
            _id,
            fullName,
            phone,
            address1,
            address2,
            city,
            state
            {
                _id
            },
            country
            {
                _id
            },
            currentEmployer,
            facebook,
            instagram,
            twitter,
            linkedin,
            yourStoryAbout,
            emailSecondary,
            resume,
            password,
            countryDetails{
                _id,
                country
            },
            stateDetails{
                _id,
                code,countryId
            },
            expertises{
                _id,
                name
            },
            skill{
                _id,name
            },
            experience{
                _id,name
            }

        }
    }
`;

export  function UserListDETAIL() {
  const { loading, error, data } = useQuery(GET_USERSABOUT);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data.users;
}

