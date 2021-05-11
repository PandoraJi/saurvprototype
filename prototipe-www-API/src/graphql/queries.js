/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      name
      type {
        name
      }
      budget
      description
      arenas {
        name
      }
      book
      talent
      venue
      userID
      user {
        id
        name
        lastName
        email
        phone
        country
        state
        city
        address1
        address2
        expertises {
          name
        }
        regionalExperience {
          name
        }
        skills {
          name
        }
        yourStoryAbout
        currentEmployer
        resume
        facebook
        instagram
        linkedin
        twitter
        stories {
          nextToken
        }
        submisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      alerts {
        items {
          id
          storyID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type {
          name
        }
        budget
        description
        arenas {
          name
        }
        book
        talent
        venue
        userID
        user {
          id
          name
          lastName
          email
          phone
          country
          state
          city
          address1
          address2
          yourStoryAbout
          currentEmployer
          resume
          facebook
          instagram
          linkedin
          twitter
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobAlert = /* GraphQL */ `
  query GetJobAlert($id: ID!) {
    getJobAlert(id: $id) {
      id
      storyID
      story {
        id
        name
        type {
          name
        }
        budget
        description
        arenas {
          name
        }
        book
        talent
        venue
        userID
        user {
          id
          name
          lastName
          email
          phone
          country
          state
          city
          address1
          address2
          yourStoryAbout
          currentEmployer
          resume
          facebook
          instagram
          linkedin
          twitter
          createdAt
          updatedAt
        }
        alerts {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      submisions {
        items {
          id
          alertID
          userID
          status
          description
          files
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listJobAlerts = /* GraphQL */ `
  query ListJobAlerts(
    $filter: ModelJobAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobAlerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storyID
        story {
          id
          name
          budget
          description
          book
          talent
          venue
          userID
          createdAt
          updatedAt
        }
        description
        submisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubmision = /* GraphQL */ `
  query GetSubmision($id: ID!) {
    getSubmision(id: $id) {
      id
      alertID
      userID
      status
      description
      files
      alert {
        id
        storyID
        story {
          id
          name
          budget
          description
          book
          talent
          venue
          userID
          createdAt
          updatedAt
        }
        description
        submisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        lastName
        email
        phone
        country
        state
        city
        address1
        address2
        expertises {
          name
        }
        regionalExperience {
          name
        }
        skills {
          name
        }
        yourStoryAbout
        currentEmployer
        resume
        facebook
        instagram
        linkedin
        twitter
        stories {
          nextToken
        }
        submisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSubmisions = /* GraphQL */ `
  query ListSubmisions(
    $filter: ModelSubmisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        alertID
        userID
        status
        description
        files
        alert {
          id
          storyID
          description
          createdAt
          updatedAt
        }
        user {
          id
          name
          lastName
          email
          phone
          country
          state
          city
          address1
          address2
          yourStoryAbout
          currentEmployer
          resume
          facebook
          instagram
          linkedin
          twitter
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastName
      email
      phone
      country
      state
      city
      address1
      address2
      expertises {
        name
      }
      regionalExperience {
        name
      }
      skills {
        name
      }
      yourStoryAbout
      currentEmployer
      resume
      facebook
      instagram
      linkedin
      twitter
      stories {
        items {
          id
          name
          budget
          description
          book
          talent
          venue
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      submisions {
        items {
          id
          alertID
          userID
          status
          description
          files
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        email
        phone
        country
        state
        city
        address1
        address2
        expertises {
          name
        }
        regionalExperience {
          name
        }
        skills {
          name
        }
        yourStoryAbout
        currentEmployer
        resume
        facebook
        instagram
        linkedin
        twitter
        stories {
          nextToken
        }
        submisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
