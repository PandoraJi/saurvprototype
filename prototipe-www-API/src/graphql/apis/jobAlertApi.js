import { gql, useQuery } from '@apollo/client'

const GET_ALERTJOBLIST = gql`
    query allJobAlertDetail {
        jobAlerts {
            _id,
            name,
            details,
            skill,
            expertises,
            experience,
        }
    }
`;


const GET_USERSLIST = gql`
    query User {
        users {
            id,
            fullName,
            phone,
            address1,
            address2,
            city,
            state,
            country,
            currentEmployer,
            facebook,
            instagram,
            twitter,
            linkedin,
            #            expertises{
            #                name,
            #                _id
            #            },
            #            skills{
            #                name,
            #                _id 
            #            },
            #            regionalExperience
            #            {
            #                name,
            #                _id  
            #            },
            yourStoryAbout,
            emailSecondary,
            resume

        }
    }
`;

export  function UserList() {
    const { loading, error, data } = useQuery(GET_USERSLIST);

    if (loading) return 'loading...';
    if (error) return `Error! ${error}`;
    return  data.users;
}

