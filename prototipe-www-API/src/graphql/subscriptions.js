/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
export const onCreateJobAlert = /* GraphQL */ `
  subscription OnCreateJobAlert {
    onCreateJobAlert {
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
export const onUpdateJobAlert = /* GraphQL */ `
  subscription OnUpdateJobAlert {
    onUpdateJobAlert {
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
export const onDeleteJobAlert = /* GraphQL */ `
  subscription OnDeleteJobAlert {
    onDeleteJobAlert {
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
export const onCreateSubmision = /* GraphQL */ `
  subscription OnCreateSubmision {
    onCreateSubmision {
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
export const onUpdateSubmision = /* GraphQL */ `
  subscription OnUpdateSubmision {
    onUpdateSubmision {
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
export const onDeleteSubmision = /* GraphQL */ `
  subscription OnDeleteSubmision {
    onDeleteSubmision {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
