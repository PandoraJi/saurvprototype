const { ApolloServer, gql } = require('apollo-server');
const { find, filter } = require('lodash');
const typeDefs = gql`
type aboutCountryType {
    _id: ID!
    code: String!
    name: String!
}

input AboutInput {
    id: String!
    fullName: String!
    phone: String!
    address1: String!
    address2: String!
    city: String!
    state: StateInputAbout!
    country: CountryInputAbout!
    currentEmployer: String!
    facebook: String!
    instagram: String
    twitter: String
    linkedin: String
    expertises: [ExpertiseInputAbout]
    skills: [SkillsInputAbout]
    regionalExperience: [regionalInputAbout]
    yourStoryAbout: String
    emailSecondary: String
    resume: Upload
}

type aboutStateType {
    _id: ID
}

type AboutUser {
    _id: ID!
    fullName: String
    phone: String
    address1: String
    address2: String
    city: String
    state: aboutStateType
    country: aboutCountryType
    currentEmployer: String
    facebook: String
    instagram: String
    twitter: String
    linkedin: String
    expertises: [RelatedExpertiseType]
    skill: [RelatedSkills]
    experience: [relatedRegionalType]
    yourStoryAbout: String
    emailSecondary: String
    password: String
    resume: fileType
    countryDetails: [countryDetailsType]
    stateDetails: [stateDetailsType]
}

type aboutUserAdded {
    message: String!
}

type Arenas {
    _id: ID!
    name: String!
}

input ArenasInput {
    name: String!
}

type BulkCountry {
    message: String!
}

enum CacheControlScope {
    PUBLIC
    PRIVATE
}

type Country {
    _id: ID!
    code: String!
    country: String!
}

type countryDetailsType {
    _id: ID
    code: String
    country: String
}

input CountryInput {
    code: String!
    country: String!
    state: [StateInput]
}

input CountryInputAbout {
    name: String!
    id: String!
}

scalar Date

type emailReferralType {
    _id: ID
    email: String
    referralId: String
    referralCode: String
    status: Boolean
}

type Expertise {
    _id: ID!
    name: String!
}

input ExpertiseInput {
    name: String!
}

input ExpertiseInputAbout {
    name: String!
    id: String!
}

type fileType {
    filename: String
    mimetype: String
    encoding: String
}

type ForgotPassword {
    message: String!
}

type Initials {
    _id: ID!
    initial1: String
    initial2: String
    initial3: String
    initial4: String
    userId: String
}

input InitialsInput {
    initial1: String!
    initial2: String!
    initial3: String!
    initial4: String!
    userId: String!
}

type jobAdded {
    message: String!
}

type jobAlerts {
    _id: ID
    name: String
    details: String
    skill: [relatedJobAlertSkillsType]
    expertises: [relatedJobAlertExpertiseType]
    experience: [relatedJobAlertExpertiseType]
}

input listJobAlertsInput {
    id: String
    name: String!
    details: String!
    skillsId: [relatedSkillsInput]
    expertiseId: [relatedExpertiseInput]
    regionalExperienceId: relatedExperienceInput
}

type MasterSettings {
    _id: ID!
    name: String!
}

type Mutation {
    _: Boolean
    register(
        email: String!
        password: String!
        referralCode: String
        role: String
    ): UserAuth
    login(email: String!, password: String!, referralCode: String): UserAuth
    forgotPassword(email: String!): ForgotPassword
    resetPassword(token: String!, password: String!): UserAuth
    addCountry(countryType: CountryInput): BulkCountry
    addExpertise(expertiseType: ExpertiseInput): Expertise
    addRegionalExperience(
        regionalExperienceType: RegionalExperienceInput
    ): RegionalExperience
    addSkills(skillsType: SkillsInput): Skills
    addReferralCode(referralCodeType: ReferralCodeInput): ReferralCode
    addInitials(initialsType: InitialsInput): Initials
    addSettings(settingsType: SettingsInput): MasterSettings
    addArenas(arenasType: ArenasInput): Arenas
    addStoryType(storyType: StoryTypeInput): StoryType
    addAboutUser(aboutType: AboutInput): aboutUserAdded
    accountSettingsUser(aboutType: AboutInput, userId: ID): String
    deleteAboutUser(userId: ID): String
    addStory(submitStoryType: submitStoryInput): storyAdded
    updateStory(submitStoryType: submitStoryInput): String
    deleteStory(storySubmitId: String): String
    createJob(jobAlertType: listJobAlertsInput): jobAdded
    updateJob(jobAlertType: listJobAlertsInput): jobAdded
    deleteJob(jobAlertId: ID): String
    reply(replyType: replyToJobAlertInput): reply
    sendReferral(referralType: referralInput): Referrals
}

type Query {
    _: Boolean
    user(id: ID!): User
    users: [User!]
    countryDetails: [Country!]
    stateDetails: [state!]
    expertiseDetail: [Expertise!]
    regionalExperienceDetail: [RegionalExperience!]
    skillsDetail: [Skills!]
    referralCodes: [ReferralCode!]
    initialDetails(userId: String): Initials
    allInitialDetails: [Initials!]
    settingsDetail: [MasterSettings!]
    arenasDetail: [Arenas!]
    storyTypeDetail: [StoryType!]
    aboutUserDetails(aboutUserId: String): AboutUser!
    aboutAllUserDetails: [AboutUser!]
    storyDetails(storySubmitId: String): storySubmitUser
    allStoryDetails: [storySubmitUser!]
    allJobAlertDetail: [jobAlerts!]
    jobAlertDetail(
        skillsId: String
        expertiseId: String
        regionalExperienceId: String
    ): [jobAlerts!]
    replies(userId: String, jobAlertId: String): [replyAdded]
    referralDetails(userId: String!): [Referral]
}

type Referral {
    _id: ID
    userId: String
    email: [emailReferralType]
}

type ReferralCode {
    name: String!
}

input ReferralCodeInput {
    name: String!
}

input referralInput {
    userId: String!
    email: [String]!
}

type Referrals {
    message: String!
}

type RegionalExperience {
    _id: ID!
    name: String!
}

input RegionalExperienceInput {
    name: String!
}

input regionalInputAbout {
    name: String!
    id: String!
}

input relatedArenasInput {
    name: String!
    id: String!
}

type RelatedArenasType {
    storySubmitId: String
    relatedArenasId: String
    userId: String
    _id: String
}

input relatedExperienceInput {
    id: String!
}

input relatedExpertiseInput {
    id: String!
}

type RelatedExpertiseType {
    name: String
    _id: String
}

type relatedJobAlertExpertiseType {
    name: String
    _id: String
}

type relatedJobAlertSkillsType {
    name: String
    _id: String
}

type relatedRegionalType {
    _id: String
    name: String
}

input relatedSettingsInput {
    name: String!
    id: String!
}

type RelatedSettingsType {
    storySubmitId: String
    relatedSettingsId: String
    userId: String
    _id: String
}

type RelatedSkills {
    name: String
    _id: String
}

input relatedSkillsInput {
    id: String!
}

type relatedStoryType {
    storySubmitId: String
    storyTypeId: String
    userId: String
    _id: String
}

input relatedStoryTypeInput {
    name: String!
    id: String!
}

type reply {
    message: String!
}

type replyAdded {
    _id: ID
    jobAlertId: String
    userId: String
    message: String
}

input replyToJobAlertInput {
    jobAlertId: String!
    userId: String!
    message: String!
}

input SettingsInput {
    name: String!
}

type Skills {
    _id: ID!
    name: String!
}

input SkillsInput {
    name: String!
}

input SkillsInputAbout {
    name: String!
    id: String!
}

type state {
    countryId: String!
    name: String!
    code: String!
}

type stateDetailsType {
    _id: ID
    code: String
    name: String
    countryId: String
}

input StateInput {
    name: String!
    code: String!
}

input StateInputAbout {
    name: String!
    id: String!
}

type storyAdded {
    message: String!
}

type storySubmitUser {
    _id: ID!
    storyType: [relatedStoryType]
    budget: String
    fullName: String
    projectStory: String
    notes: String
    files: fileType
    arenas: [RelatedArenasType]
    settings: [RelatedSettingsType]
    userId: String
}

type StoryType {
    _id: ID!
    name: String!
}

input StoryTypeInput {
    name: String!
}

input submitStoryInput {
    storyType: relatedStoryTypeInput
    budget: String
    fullName: String
    projectStory: String
    notes: String
    files: Upload
    arenas: [relatedArenasInput]
    settings: [relatedSettingsInput]
    userId: String!
    storySubmitId: String
}

scalar Upload

type User {
    id: String
    fullName: String
    phone: String
    address1: String
    address2: String
    city: String
    state: String
    country: String
    currentEmployer: String
    facebook: String
    instagram: String
    twitter: String
    linkedin: String
    expertises: [userExpertiseType]
    skills: [userSkillsType]
    regionalExperience: [userRegionalExperienceType]
    yourStoryAbout: String
    emailSecondary: String
    resume: String
    role: String
}

type UserAuth {
    token: String
    userId: ID
    role: String
}

type userExpertiseType {
    userId: String
    expertiseId: String
}

type userRegionalExperienceType {
    userId: String
    regionalExperienceId: String
}

type userSkillsType {
    userId: String
    skillsId: String
    _id: String
}`;



const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
