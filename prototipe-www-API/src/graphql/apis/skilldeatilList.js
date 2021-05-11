
import { gql, useQuery } from '@apollo/client'

const GET_SKILLSLIST = gql`
    query Skills {
        skillsDetail {
            _id,
            name
        }
    }
`;

export  function SkillList() {
  const { loading, error, data } = useQuery(GET_SKILLSLIST);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
