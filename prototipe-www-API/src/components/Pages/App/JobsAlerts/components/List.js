import React, { useState, useEffect } from 'react'
import AlertItem from './ListItem'

import { useQuery, gql } from '@apollo/client';
// import GET_USER from '@graphql/queries/user';
const GET_ALERTS = gql`
  query JobAlerts {
      allJobAlertDetail {
          _id,
          name,
          details,
#         skill,
#        expertises,
#         experience
    }
  }
`;


function AlertsList() {
    const { loading, error, data } = useQuery(GET_ALERTS);

    if (loading) return 'loading...';
    if (error) return `Error! ${error}`;

    // console.log(data);

    return (
      <ul className="overflow-scroll">
        { data.allJobAlertDetail && data.allJobAlertDetail.map((alert, index) => (
          <AlertItem alert={alert} key={index} />
        ))}
      </ul>
    );
  }

export default AlertsList
