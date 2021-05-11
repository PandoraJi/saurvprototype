

import { gql, useQuery } from '@apollo/client'

const GET_REFERRALLIST = gql`
    query ReferralCode {
        referralCodes {
            name
        }
    }
`;

export  function ReferralList() {
  const { loading, error, data } = useQuery(GET_REFERRALLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}

