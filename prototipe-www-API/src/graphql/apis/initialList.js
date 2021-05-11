
import { gql, useQuery } from '@apollo/client'

const GET_INITIALLIST = gql`
    query Initials {
        allInitialDetails {
            _id,
            initial1,
            initial2,
            initial3,
            initial4,
            userId,
        }
    }
`;

export  function InitialList() {
  const { loading, error, data } = useQuery(GET_INITIALLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
