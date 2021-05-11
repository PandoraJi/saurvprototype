/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
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
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
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
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
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
export const createJobAlert = /* GraphQL */ `
  mutation CreateJobAlert(
    $input: CreateJobAlertInput!
    $condition: ModelJobAlertConditionInput
  ) {
    createJobAlert(input: $input, condition: $condition) {
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
export const updateJobAlert = /* GraphQL */ `
  mutation UpdateJobAlert(
    $input: UpdateJobAlertInput!
    $condition: ModelJobAlertConditionInput
  ) {
    updateJobAlert(input: $input, condition: $condition) {
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
export const deleteJobAlert = /* GraphQL */ `
  mutation DeleteJobAlert(
    $input: DeleteJobAlertInput!
    $condition: ModelJobAlertConditionInput
  ) {
    deleteJobAlert(input: $input, condition: $condition) {
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
export const createSubmision = /* GraphQL */ `
  mutation CreateSubmision(
    $input: CreateSubmisionInput!
    $condition: ModelSubmisionConditionInput
  ) {
    createSubmision(input: $input, condition: $condition) {
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
export const updateSubmision = /* GraphQL */ `
  mutation UpdateSubmision(
    $input: UpdateSubmisionInput!
    $condition: ModelSubmisionConditionInput
  ) {
    updateSubmision(input: $input, condition: $condition) {
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
export const deleteSubmision = /* GraphQL */ `
  mutation DeleteSubmision(
    $input: DeleteSubmisionInput!
    $condition: ModelSubmisionConditionInput
  ) {
    deleteSubmision(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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



