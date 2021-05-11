import React, { useState }  from 'react'
import { Link } from 'gatsby'
import { LayoutLogin } from '@layout'
import client from '@graphql/client';
import { CountryList } from '@graphql/apis/countrylist'
import { ExpertiseList} from '@graphql/apis/expertiselist'
import { RegionalexperienceList} from '@graphql/apis/regionalexperienceList'

import {InitialList} from '@graphql/apis/initialList'
import { ReferralList} from '@graphql/apis/referralList'
import { StateList} from '@graphql/apis/statelist'
import {SkillList} from '@graphql/apis/skilldeatilList'
import { ApolloProvider } from '@apollo/client'
import { AppUser } from '@auth'
import { useMutation, gql } from '@apollo/client';
import { navigate } from '@reach/router'

const Step7 = (props) => {
  props.usersteps.loading=true;
 let  isLoading=true;


 if(props != null )
 {
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
         countries.push({ key: getcountry.countryDetails[item]._id, text: getcountry.countryDetails[item].country, value: getcountry.countryDetails[item].country })
       }

     }
   }
   const mapexperience=()=> {

     let getexperience = RegionalexperienceList();
     if(getexperience!==null)
     {
       for(let item in getexperience.regionalExperienceDetail)
       {
         experienceList.push({ key: getexperience.regionalExperienceDetail[item]._id, text: getexperience.regionalExperienceDetail[item].country, value: getexperience.regionalExperienceDetail[item].country })
       }

     }
   }

   const mapskills=()=> {

     let getskills = SkillList();
     if(getskills!==null)
     {
       for(let item in getskills.skillsDetail)
       {
         skills.push({ key: getskills.skillsDetail[item]._id, text: getskills.skillsDetail[item].name, value: getskills.skillsDetail[item].name })
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
         expertiseList.push({ key: getexpertise.expertiseDetail[item]._id, text: getexpertise.expertiseDetail[item].name, value: getexpertise.expertiseDetail[item].name })
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
         states.push({  id: getstate.stateDetails[item]._id, key: getstate.stateDetails[item]._id,countryid: getstate.stateDetails[item].countryId, text: getstate.stateDetails[item].name, value: getstate.stateDetails[item].name })
       }

     }

   }
   mapcountries();
   mapskills();
   mapexpertise();
   mapstates();
   mapexperience();
   props.usersteps.step_2.getcountry=countries.length>0?countries:[];
   props.usersteps.step_2.getexpertise=expertiseList.length>0?expertiseList:[];
   props.usersteps.step_2.getstate=states.length>0?states:[];
   props.usersteps.step_2.getintial=skills.length>0?skills:[];
   props.usersteps.step_2.getskills=skills.length>0?skills:[];
   props.usersteps.step_2.getsexperiencelist=experienceList.length>0?experienceList:[];
   props.usersteps.stage="step-2"
   isLoading=false;
   props.usersteps.loading=false;
 }


if(isLoading === true) {
    return (
      <div>Loading...</div>
    )
  }


  return (

    <LayoutLogin>
      <div>
      </div>

    </LayoutLogin>

  )
}

export default Step7
