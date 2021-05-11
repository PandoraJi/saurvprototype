

import { gql, useQuery } from '@apollo/client'

const GET_ARENASLIST = gql`
    query Arenas {
        arenasDetail {
            _id,
           name
        }
    }
`;

export  function ArenasList() {
  const { loading, error, data } = useQuery(GET_ARENASLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
