import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

import { AppContent } from '@layout'

import { InputText, InputTextArea, Phone, SelectCreateMulti,Email,SelectSingle  } from '@forms'
import IconUpload from '@assets/vectors/upload.svg';
import { navigate } from '@reach/router'
// Mutations
import { useMutation, gql,useQuery } from '@apollo/client';
import {UserList} from '@graphql/apis/jobAlertApi'
import AlertItem from '../JobsAlerts/components/ListItem'
import AlertsList from '../JobsAlerts/components/List'
// import LOGIN from '@graphql/mutations/login';
import { CountryList } from '@graphql/apis/countrylist'
import { ExpertiseList} from '@graphql/apis/expertiselist'
import {InitialList} from '@graphql/apis/initialList'
import { ReferralList} from '@graphql/apis/referralList'
import { StateList} from '@graphql/apis/statelist'
import {SkillList} from '@graphql/apis/skilldeatilList'
import { RegionalexperienceList} from '@graphql/apis/regionalexperienceList'
import axios from 'axios'


const ACCOUNTSETTING = gql`
    mutation AddAboutUser($aboutType: AboutInput!) {
        addAboutUser(aboutType: $aboutType)
    }
`;




const GET_USERSCurrent = gql`
    query AboutUserDetails($aboutUserId:String!) {
        aboutUserDetails (aboutUserId:$aboutUserId) {
            _id,
            fullName,
            phone,
            address1,
            address2,
            city,
            state{
                _id
            },
            country
            {
                _id
            },
            currentEmployer,
            facebook,
            instagram,
            twitter,
            linkedin,
            countryDetails{
                _id,
                country
            },
            stateDetails{
                _id,
                code,countryId
            },
            expertises{
                _id,
                name
            },
            skill{
                _id,name
            },
            experience{
                _id,name
            }
            yourStoryAbout,
            emailSecondary

        }
    }
`;

const Profile = (props) => {
  const [profileState, setProfileState] = useState({
    id: '',
    type:0,
    full_name: '',
    email: '',
    phone: '',
    address_1: '',
    address_2: '',
    city: '',
    state: {},
    zip_code: '',
    country: {},
    stateselected: {},
    countryselected: {},
    current_employer: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    expertises: [],
    expertisesselected:[],
    skills: [],
    skillsselected:[],
    regional_experienceselected:[],
    regional_experience: [],
    your_story: '',
    emailSecondary:'',
    resume:null,
    first_name:'',
    last_name:''
  });




  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputFile = useRef(null)
  const handleUpdate = event => {
    setProfileState({
      ...profileState,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdatePhone = event => {
    setProfileState({
      ...profileState,
      [event.target.name]: event.target.value,
       phone: event.target.value
    });
  };

  const onFileChange = event => {

    // Update the state
    // profileState.resume=event.target.files[0];
    setProfileState({ resume: event.target.files[0] });

  };

  const onButtonBrowseClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
 const onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    formData.append(
      "myFile",
      profileState.resume,
      profileState.resume.name
    );

    // Details of the uploaded file
    console.log(profileState.resume);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };


  const handleDropDownCountry = event => {
    event.persist();
    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      profileState.country={};
    }else
    {
      profileState.country={};
      let countryItem= countries.filter(x=>x.value===item_name);
      if(countryItem.length>0)
      {
        profileState.country={ id:countryItem[0].key,name:countryItem[0].text };
      }

    }


  };
  const handleDropDownState = event => {
    event.persist();
    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      profileState.state={};
    }else
    {
      profileState.state={};
      let statesItem= states.filter(x=>x.value===item_name);
      if(statesItem.length>0)
      {
        profileState.state={ id:statesItem[0].key,name:statesItem[0].text };
      }
    }
  };
  const handleDropDownExpertise = event => {
    event.persist();
    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      let index= profileState.expertises.findIndex(x=>x.name===event.target.parentNode.textContent);

      // var index = profileState.expertises.indexOf(event.target.parentNode.textContent);
      if (index !== -1) {
        profileState.expertises.splice(index, 1);
      }
    }else
    {


      let expertiseItem= expertiseList.filter(x=>x.value===item_name);
      if(expertiseItem.length>0)
      {
        profileState.expertises.push({ id:expertiseItem[0].key,name:expertiseItem[0].text });
      }

    }


  };
  const handleDropDownSkills = event => {
    event.persist();
    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      let index= profileState.skills.findIndex(x=>x.name===event.target.parentNode.textContent);

      // var index = profileState.skills.indexOf(event.target.parentNode.textContent);
      if (index !== -1) {
        profileState.skills.splice(index, 1);
      }
    }else
    {
      let skillItem= skills.filter(x=>x.value===item_name);
      if(skillItem.length>0)
      {
        profileState.skills.push({ id:skillItem[0].key,name:skillItem[0].text });
      }

    }
  };

  const handleDropDownExperience = event => {
    event.persist();
    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      let index= profileState.regional_experience.findIndex(x=>x.name===event.target.parentNode.textContent);

      // var index = profileState.regional_experience.indexOf(event.target.parentNode.textContent);
      if (index !== -1) {
        profileState.regional_experience.splice(index, 1);
      }
    }else
    {
      let experienceItem= experienceList.filter(x=>x.value===item_name);
      if(experienceItem.length>0)
      {
        profileState.regional_experience.push({ id:experienceItem[0].key,name:experienceItem[0].text });
      }

    }
  };

  const [profileMutate] = useMutation(ACCOUNTSETTING, {
    variables: {
      aboutType: {
        id: localStorage.getItem('USER_ID'),
        fullName: profileState != null ? profileState.first_name +"  "+ profileState.last_name : "",
        phone: profileState != null ? profileState.phone_number : "",
        address1: profileState != null ? profileState.address_1 : "",
        address2: profileState != null ? profileState.address_2 : "",
        city: profileState != null ? profileState.city : "",
        state: props != null ? profileState.state : {},
        // zip_code: props != null ? profileState.zip_code : "",
        country: props != null ? profileState.country : {},
        currentEmployer: profileState != null ? profileState.current_employer : "",
        facebook: profileState != null ? profileState.facebook : "",
        instagram: profileState != null ? profileState.instagram : "",
        linkedin: profileState != null ? profileState.linkedin : "",
        twitter: profileState != null ? profileState.twitter : "",
        expertises: props != null ? profileState.expertises : [],
        skills: props != null ? profileState.skills : [],
        regionalExperience: props != null ? profileState.regional_experience : [],
        yourStoryAbout: profileState != null ? profileState.your_story : "",
        emailSecondary: profileState != null ? profileState.emailSecondary : ""
      }

    },
    onCompleted: ({ profile }) => {
      console.log('response', profile);

      if(profile) {
        setError(null);
        setIsLoading(false);
        navigate('/dashboard');
      } else {
        // error;
        setError('error');
        setIsLoading(false);
      }

    },
    onError:(error)=>{
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }

  });

  const handleProfile = async e => {
    e.preventDefault()
    if(validate()) {
      setIsLoading(true);
      setError(null);
      console.log('profile...', isLoading);
      await profileMutate();
    }
  };
  let states = [];
  let countries = [];
  let skills = [];
  let expertiseList = [];
  let experienceList=[];
const mapcountries=()=> {

  let getcountry = CountryList();
  if(getcountry!==null)
  {
    for(let item in getcountry.countryDetails)
    {
      countries.push({ id: getcountry.countryDetails[item]._id, key: getcountry.countryDetails[item]._id, text: getcountry.countryDetails[item].country, value: getcountry.countryDetails[item].country })
    }

  }
}
  const mapskills=()=> {

    let getskills = SkillList();
    if(getskills!==null)
    {
      for(let item in getskills.skillsDetail)
      {
        skills.push({id: getskills.skillsDetail[item]._id, key: getskills.skillsDetail[item]._id, text: getskills.skillsDetail[item].name, value: getskills.skillsDetail[item].name })
      }

    }

  }
  const mapexpertise=()=> {

    //expertiseDetail
    let getexpertise = ExpertiseList();
    if(getexpertise!==null)
    {
      for(let item in getexpertise.expertiseDetail)
      {
        expertiseList.push({ id: getexpertise.expertiseDetail[item]._id, key: getexpertise.expertiseDetail[item]._id, text: getexpertise.expertiseDetail[item].name, value: getexpertise.expertiseDetail[item].name })
      }

    }
  }
  const mapstates=()=> {

    //stateDetails  code name, countryId
    let getstate = StateList();
    console.log("getexpertise" + getstate);
    if(getstate!==null)
    {
      for(let item in getstate.stateDetails)
      {
        states.push({ id: getstate.stateDetails[item]._id,key: getstate.stateDetails[item]._id,countryid: getstate.stateDetails[item].countryId, text: getstate.stateDetails[item].name, value: getstate.stateDetails[item].name })
      }

    }

  }
  const mapexperience=()=> {

    let getexperience = RegionalexperienceList();
    if(getexperience!==null)
    {
      for(let item in getexperience.regionalExperienceDetail)
      {
        experienceList.push({ id: getexperience.regionalExperienceDetail[item]._id,key: getexperience.regionalExperienceDetail[item]._id, text: getexperience.regionalExperienceDetail[item].country, value: getexperience.regionalExperienceDetail[item].country })
      }

    }
  }

  mapcountries();
  mapskills();
  mapexpertise();
  mapstates();
  mapexperience();
  const validate= () =>
  {

    let errors = [];
    let isValid = true;

    if (!profileState.first_name) {
      isValid = false;
      errors.push("Please enter your First Name.");
      profileState.first_nameerror = "Please enter First Name";
    }
    else if (typeof profileState.first_name == "undefined") {
      isValid = false;
      errors.push( "Please enter your First Name.");
      profileState.first_nameerror = "Please enter First Name";
    }
    else {
      profileState.first_nameerror ="";
    }
    if (!profileState.email) {
      isValid = false;
      errors.push("Please enter your  email.");
      profileState.emailerror = "Please enter email";
    }else
    if (typeof profileState.email !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(profileState.email)) {
        isValid = false;
        errors.push("Please enter valid email address.");
        profileState.emailerror = "Please enter email";
      }
    }else {
      profileState.emailerror ="";
    }


    if (!profileState.emailSecondary) {
      isValid = false;
      errors.push("Please enter your  email.");
      profileState.emailSecondaryerror = "Please enter email";
    }else
    if (typeof profileState.emailSecondary !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(profileState.emailSecondary)) {
        isValid = false;
        errors.push("Please enter valid email address.");
        profileState.emailSecondaryerror = "Please enter email";
      }
    }else {
      profileState.emailSecondaryerror ="";
    }

    if (!profileState.phone) {
      isValid = false;
      errors.push("Please enter your phone.");
      profileState.phoneerror = "Please enter phone";
    }
    else if (typeof profileState.phone == "undefined") {
      isValid = false;
      errors.push( "Please enter your phone.");
      profileState.phoneerror = "Please enter Valid phone";
    }else {
      profileState.phoneerror ="";
    }

    if (!profileState.address_1) {
      isValid = false;
      errors.push("Please enter your address .");
      profileState.address1error = "Please enter Valid address1";
    }
    else if (typeof profileState.address_1 == "undefined") {
      isValid = false;
      errors.push( "Please enter your address1 .");
      profileState.address1error = "Please enter Valid address ";
    }else {
      profileState.address1error ="";
    }

    if (!profileState.last_name) {
      isValid = false;
      errors.push("Please enter your Last Name.");
      profileState.last_nameerror = "Please enter  Last Name";
    }
    else if (typeof profileState.last_name == "undefined") {
      isValid = false;
      errors.push( "Please enter your Last Name.");
      profileState.last_nameerror = "Please enter  Last Name";
    }else {
      profileState.last_nameerror ="";
    }

    if (!profileState.address_2) {
      isValid = false;
      errors.push("Please enter your address 2 .");
      profileState.address2error = "Please enter address 2";
    }
    else if (typeof profileState.address_2 == "undefined") {
      isValid = false;
      errors.push( "Please enter your address 2.");
      profileState.address2error = "Please enter address 2";
    }else {
      profileState.address2error ="";
    }

    if (!profileState.city) {
      isValid = false;
      errors.push("Please enter your city.");
      profileState.cityerror = "Please enter Valid city";
    }
    else if (typeof profileState.city == "undefined") {
      isValid = false;
      errors.push( "Please enter your city.");
      profileState.cityerror = "Please enter city";
    }else {
      profileState.cityerror ="";
    }

    if (!profileState.state) {
      isValid = false;
      errors.push("Please enter your state.");
      profileState.fstateerror = "Please enter Valid state";
    }
    else if (typeof profileState.state == "undefined") {
      isValid = false;
      errors.push( "Please enter your state.");
      profileState.stateerror = "Please enter Valid state";
    }else {
      profileState.stateerror ="";
    }

    if (!profileState.country) {
      isValid = false;
      errors.push("Please enter your country.");
      profileState.countryerror = "Please enter Valid country";
    }
    else if (typeof profileState.country == "undefined") {
      isValid = false;
      errors.push( "Please enter your country.");
      profileState.countryerror = "Please enter Valid country";
    }else {
      profileState.countryerror ="";
    }

    if (!profileState.current_employer) {
      isValid = false;
      errors.push("Please enter your  current employer.");
      profileState.current_employererror = "Please enter current employer";
    }
    else if (typeof profileState.current_employer == "undefined") {
      isValid = false;
      errors.push( "Please enter your current employer.");
      profileState.current_employererror = "Please enter current employer";
    }else {
      profileState.current_employererror ="";
    }

    if (!profileState.facebook) {
      isValid = false;
      errors.push("Please enter your facebook.");
      profileState.facebookerror = "Please enter Valid facebook Url";
    }
    else if (typeof profileState.facebook == "undefined") {
      isValid = false;
      errors.push( "Please enter your facebook.");
      profileState.facebookerror = "Please enter Valid facebook Url";
    }else {
      profileState.facebookerror ="";
    }

    if (!profileState.instagram) {
      isValid = false;
      errors.push("Please enter your instagram.");
      profileState.instagramerror = "Please enter Valid Url";
    }
    else if (typeof profileState.instagram == "undefined") {
      isValid = false;
      errors.push( "Please enter your instagram.");
      profileState.instagramerror = "Please enter Valid Url";
    }else {
      profileState.instagramerror ="";
    }


    setProfileState({
      ...profileState,
      errors
    });
    setError(errors);
    return isValid;
  }

 const fileData = () => {

    if (profileState.resume) {

      return (
        <div>
          File Details:
          <p>File Name: {profileState.resume.name}</p>
          <p>File Type: {profileState.resume.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>No Data</h4>
        </div>
      );
    }
  };


  let userId=localStorage.getItem('USER_ID');

  const { loading, errortest, data } = useQuery(GET_USERSCurrent, {
    variables: { aboutUserId:userId }
  });
  if (loading) {
    console.log("Loading");
  }
  if (errortest) {
    // setAlert(props);
    console.log(`Error! ${errortest}`);
  }
  if (!data)
  {
    // setAlert(props);
    console.log("Data Null")
  }
  else {
    console.log("alert:", data);

    if (data.aboutUserDetails != null && profileState.type===0) {
      let currentuser = data.aboutUserDetails;
      profileState.address_1 = currentuser.address1 != null ? currentuser.address1 : "";
      profileState.address_2 = currentuser.address2 != null ? currentuser.address2 : "";
      profileState.city = currentuser.city != null ? currentuser.city : "";
      profileState.current_employer = currentuser.currentEmployer != null ? currentuser.currentEmployer : "";
      profileState.emailSecondary = currentuser.emailSecondary != null ? currentuser.emailSecondary : "";
      profileState.email = currentuser.emailSecondary != null ? currentuser.emailSecondary : "";
      profileState.facebook = currentuser.facebook != null ? currentuser.facebook : "";
      profileState.first_name = currentuser.fullName != null ? currentuser.fullName.split(" ")[0] : "";
      profileState.last_name = currentuser.fullName != null ? currentuser.fullName.split(" ")[1] : "";
      profileState.linkedin = currentuser.linkedin != null ? currentuser.linkedin : "";
      profileState.instagram = currentuser.instagram != null ? currentuser.instagram : "";
      profileState.phone = currentuser.phone != null ? currentuser.phone.substr(1, currentuser.phone.length) : "";
      profileState.twitter = currentuser.twitter != null ? currentuser.twitter : "";
      profileState.your_story = currentuser.yourStoryAbout != null ? currentuser.yourStoryAbout : "";
      profileState.id = currentuser._id != null ? currentuser._id : "";
      profileState.type = 1;
      if (currentuser.state != null) {
        let stateItem = states.filter(x => x.key === currentuser.state._id);
        if (stateItem.length > 0) {
          profileState.state = { id: stateItem[0].key, name: stateItem[0].text };
          profileState.stateselected = stateItem[0].text;
        }

      }
      if (currentuser.country != null) {
        let countryItem = countries.filter(x => x.key === currentuser.country._id);
        if (countryItem.length > 0) {
          profileState.country = { id: countryItem[0].key, name: countryItem[0].text };
          profileState.countryselected = countryItem[0].text;
        }

      }

      if (currentuser.expertises.length > 0) {
        for (let ext = 0; ext < currentuser.expertises.length; ext++) {
          let expertise = expertiseList.filter(x => x.key === currentuser.expertises[ext]._id);
          if (expertise.length > 0) {
            profileState.expertises.push({ id: expertise[0].key, name: expertise[0].text });
            profileState.expertisesselected.push(expertise[0].text);
          }

        }
      }

      if (currentuser.experience.length > 0) {
        for (let ext = 0; ext < currentuser.experience.length; ext++) {
          let experience = experienceList.filter(x => x.key === currentuser.experience[ext]._id);
          if (experience.length > 0) {
            profileState.regional_experience.push({ id: experience[0].key, name: experience[0].text });
            profileState.regional_experienceselected.push(experience[0].text);
          }

        }
      }

      if (currentuser.skill.length > 0) {
        for (let ext = 0; ext < currentuser.skill.length; ext++) {
          let skillitem = skills.filter(x => x.key === currentuser.skill[ext]._id);
          if (skillitem.length > 0) {
            profileState.skills.push({ id: skillitem[0].key, name: skillitem[0].text });
            profileState.skillsselected.push(skillitem[0].text);
          }

        }
      }
    }
  }


  return (


      <AppContent  {...props}>
        <div className="flex flex-row justify-between mb-8">
          <div>
          <h1 className="text-lg">Account Settings</h1>
          <span className="text-sm text-gray-lighter">Last login date: October 19, 2020 - 3:52 ET</span>
          </div>

          <button className="bg-blue h-8 px-9 rounded flex-0">
            <Link rel="preload" crossorigin="anonymous" to="/reset">
            Reset Password
            </Link>
          </button>
        </div>


        <div className="w-full bg-gray-darker rounded  border border-blue">
          <div className="flex flex-col p-7 md:py-10 md:px-16">

            <div className="">
              <div className="w-1/5 mr-10">
                <div className="bg-blue rounded-full flex flex-col justify-center items-center cursor-pointer"
                     style={{width: '140px', height: '140px'}}
                >
                  <IconUpload />
                  <span className="text-sm font-semibold text-white">Choose File</span>
                </div>
              </div>

              <div className="w-4/5">

                {/*  */}
                <div className="">
                  <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Personal Information</h3>
                </div>
              </div>
            </div>




            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-2">
                <InputText
                  handleUpdate={handleUpdate}
                  label={"First Name"}
                  name={"first_name"}
                  value={profileState.first_name}
                  id={"first_name"}
                  placeholder={"First Name"}
                  autoComplete={"on"}
                  errorContent={profileState.first_nameerror}
                />
              </div>
              <div className="md:w-1/2 md:pl-2">
              <InputText
                handleUpdate={handleUpdate}
                value={profileState.last_name}
                errorContent={profileState.last_nameerror}
                  label={"Last Name"}
                  name={"last_name"}
                  id={"last_name"}
                  placeholder={"Last Name"}
                  autoComplete={"on"}
                  />
              </div>
              <div className="md:w-1/2 md:pr-2">
                <Phone
                  phone={profileState.phone}
                  autoComplete="off"
                  handleUpdate={handleUpdatePhone}
                  value={profileState.phone}
                  errorContent={profileState.phoneerror}
                />
              </div>
              <div className="md:w-1/2 md:pl-2">
                <Email
                  handleUpdate={handleUpdate}
                  label={"Email"}
                  name={"email"}
                  value={profileState.email}
                  id={"email"}
                  placeholder={"Email"}
                  errorContent={profileState.emailerror}
                  email={profileState.email}
                  autoComplete="on"
                />
              </div>
              <div className="md:w-1/2 md:pr-2">
                <InputText
                  handleUpdate={handleUpdate}
                  label={" Secondary Email"}
                  name={"emailSecondary"}
                  value={profileState.emailSecondary}
                  id={"emailSecondary"}
                  placeholder={"Secondary Email"}
                  errorContent={profileState.emailSecondaryerror}
                  email={profileState.emailSecondary}
                  autoComplete="on"
                />
              </div>
              <div className="md:w-1/2 md:pl-2">
                <InputText

                  label={"Address 1"}
                  name={"address_1"}
                  id={"address_1"}
                  placeholder={"Street Name & #"}
                  autoComplete={"on"}
                  handleUpdate={handleUpdate}
                  value={profileState.address_1}
                  errorContent={profileState.address_1error}
                  />
              </div>
              <div className="md:w-1/2 md:pr-2">
                <InputText
                  label={"Address 2"}
                  name={"address_2"}
                  id={"address_2"}
                  placeholder={"Street name & #"}
                  autoComplete={"on"}
                  handleUpdate={handleUpdate}
                  value={profileState.address_2}
                  errorContent={profileState.address_2error}
                  />
              </div>
              <div className="md:w-1/2 md:pl-2">
              <InputText
                  label={"City"}
                  name={"city"}
                  id={"city"}
                  placeholder={"City"}
                  autoComplete={"on"}
                  handleUpdate={handleUpdate}
                  value={profileState.city}
                  errorContent={profileState.cityerror}
                  />
              </div>
              <div className="md:w-1/2 md:pr-2">
                <SelectSingle

                  options={states}
                  label={"State"}
                  name={"state"}
                  id={"state"}
                  placeholder={"State"}
                  autoComplete={"on"}
                  handleUpdate={handleDropDownState}
                  value={profileState.state}
                  defaultValue={profileState.stateselected}
                  errorContent={profileState.stateerror} />

              </div>
              <div className="md:w-1/2 md:pl-2">
                <InputText
                  label={"Zip Code"}
                  name={"zip_code"}
                  id={"zip_code"}
                  placeholder={"Postal Code"}
                  autoComplete={"on"}
                  handleUpdate={handleUpdate}
                  value={profileState.zip_code}
                  errorContent={profileState.zip_codeerror}
                  />
              </div>
              <div className="md:w-1/2 md:pr-2">
                <SelectSingle
                  label={"Country"}
                  name={"country"}
                  id={"country"}
                  placeholder={"Country"}
                  autoComplete={"on"}
                  options={countries}
                  handleUpdate={handleDropDownCountry}
                  value={profileState.country}
                  defaultValue={profileState.countryselected}

                  errorContent={profileState.countryerror} />
              </div>

              <div className="md:w-1/2 md:pl-2">
                <InputText

                    label={"Current Employer"}
                    name={"current_employer"}
                    id={"current_employer"}
                    placeholder={"Employer"}
                    autoComplete={"on"}
                    handleUpdate={handleUpdate}
                    value={profileState.current_employer}
                    errorContent={profileState.current_employererror}
                    />
              </div>

            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Social Media</h3>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-2">
              <InputText

                label={"Facebook"}
                name={"facebook"}
                id={"facebook"}
                placeholder={"Facebook Profile URL"}
                autoComplete={"on"}
                handleUpdate={handleUpdate}
                value={profileState.facebook}
                errorContent={profileState.facebookerror}
                />
              </div>

              <div className="md:w-1/2 md:pl-2">
              <InputText

                  label={"Instagram"}
                  name={"instagram"}
                  id={"instagram"}
                  placeholder={"Instagram Profile URL"}
                  autoComplete={"on"}
                  handleUpdate={handleUpdate}
                  value={profileState.instagram}
                  errorContent={profileState.instagramerror}
                  />
              </div>

              <div className="md:w-1/2 md:pr-2">
                <InputText

                label={"Linkedin"}
                name={"linkedin"}
                id={"linkedin"}
                placeholder={"Linkedin Profile URL"}
                autoComplete={"on"}
                handleUpdate={handleUpdate}
                value={profileState.linkedin}

                />
              </div>

              <div className="md:w-1/2 md:pl-2">
                <InputText
                  handleUpdate={handleUpdate}
                  value={profileState.twitter}
                  label={"Twitter"}
                name={"twitter"}

                id={"twitter"}
                placeholder={"Twitter Profile URL"}
                autoComplete={"on"}
                />
              </div>
            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Expertise, Skills & Regional Experience</h3>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-2">

                <SelectCreateMulti
                label={"Expertises"}
                name={"expertises"}
                id={"expertises"}
                placeholder={"Select multiple options"}
                options={expertiseList}
                handleUpdate={handleDropDownExpertise}
                defaultValue={profileState.expertisesselected}
                value={profileState.expertises} />
              </div>

              <div className="md:w-1/2 md:pl-2">
              <SelectCreateMulti
                label={"Skills"}
                name={"skills"}
                id={"skills"}
                placeholder={"Select multiple options"}
                options={skills}
                handleUpdate={handleDropDownSkills}
                defaultValue={profileState.skillsselected}
                value={profileState.skills} />

              </div>

              <div className="md:w-1/2 md:pr-2">
              <SelectCreateMulti
                label={"Regional Experience"}
                name={"regional_experience"}
                id={"regional_experience"}
                value={""}
                placeholder={"Select multiple options"}
                options={[
                  { key: 'm', text: 'master', value: 'master' },
                  { key: 'f', text: 'tech', value: 'tech' },
                  { key: 'o', text: 'mechanical', value: 'mechanical' },
                ]}
                handleUpdate={handleDropDownExperience}
                defaultValue={profileState.regional_experienceselected}
                value={profileState.regional_experience}  />
              </div>
              <div className="md:w-1/2 md:pl-2"></div>

            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Your Story</h3>
            </div>

            <div>
            <div className="w-full">
                <InputTextArea
                // handleUpdate={false}
                label={"Tell us about you"}
                name={"your_story"}
                value={""}
                id={"your_story"}
                placeholder={"Type here"}
                handleUpdate={handleUpdate}
                value={profileState.your_story}
                />
              </div>
            </div>

            <div>
              <span className="text-md font-semibold">Resume</span>
              <input name="file"  type="file"
                     id='file' ref={inputFile} style={{display: 'none'}}
                     onChange={onFileChange} />
              <button className="border border-blue bg-none h-8 rounded px-5 ml-3 text-blue font-semibold text-plus" onClick={onButtonBrowseClick}  >Browse</button>
              {/*<button  onClick={onFileUpload}>Upload!</button>*/}
              {fileData()}
            </div>
{/*  */}

          </div>
          <hr />
          <div className="p-14 py-11 flex justify-between items-center">
            <div className="w-1/5 mr-10 leftAligned">
            <span className="flex-1">
            Unsuscribe from our Newsletter
            </span>
            </div>
            <div className="w-4/5 rightaligned">

            <button
              onClick={handleProfile}  type="submit"
              disabled={isLoading} className="btn bg-red buttontext" >Save Changes
              {isLoading ? 'Loading...' : '.'}
              {isLoading && (
                <span
                  role="status"
                  aria-hidden="true"
                />
              )}
            </button>
            </div>
          </div>
          {error!=null ? '' : ''}
          {error &&  (
            <div title="Show Error">
              <span
                aria-hidden="true"
              >{error}</span> </div>
          )}

        </div>
         <Link rel="preload" crossorigin="anonymous" to="/dashboard">Home</Link>
      </AppContent>

  )
}

export default Profile
