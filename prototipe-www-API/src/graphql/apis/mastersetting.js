

import { gql, useQuery } from '@apollo/client'

const GET_MASTERSETTINGLLIST = gql`
    query MasterSettings {
        settingsDetail {
            _id,
            name
        }
    }
`;

export  function MasterList() {
  const { loading, error, data } = useQuery(GET_MASTERSETTINGLLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
