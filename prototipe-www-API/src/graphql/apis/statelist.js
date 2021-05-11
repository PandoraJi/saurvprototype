import { gql, useQuery } from '@apollo/client'

const GET_STATELIST = gql`
    query state {
        stateDetails {
            countryId,
            name,
            code,
            _id,
        }
    }
`;

export  function StateList() {
  const { loading, error, data } = useQuery(GET_STATELIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
