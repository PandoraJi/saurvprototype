
import { gql, useQuery } from '@apollo/client'

const GET_REGIONALEXPERIENCELIST = gql`
    query RegionalExperience {
        regionalExperienceDetail {
            _id,
            name
        }
    }
`;

export  function RegionalexperienceList() {
  const { loading, error, data } = useQuery(GET_REGIONALEXPERIENCELIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
