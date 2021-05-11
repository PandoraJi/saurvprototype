import { gql, useQuery } from '@apollo/client'

const GET_COUNTRYLIST = gql`
    query Country {
        countryDetails {
            _id,
            code,
            country
        }
    }
`;

export  function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRYLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
