import { gql, useQuery } from '@apollo/client'

const GET_EXPERTISELIST = gql`
    query Expertise {
        expertiseDetail {
            _id,
            name
        }
    }
`;

export  function ExpertiseList() {
  const { loading, error, data } = useQuery(GET_EXPERTISELIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
