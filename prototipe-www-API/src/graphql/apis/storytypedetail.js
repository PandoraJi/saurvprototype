import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
const GET_STORYDETAIL = gql`
    query StoryType {
        storyTypeDetail {
            _id,
            name
        }
    }
`;

export  function StoryDetail() {
  const { loading, error, data } = useQuery(GET_STORYDETAIL);

  if (loading) return 'loading...';
  if (error) return `Error! ${error}`;
  return  data;
}
