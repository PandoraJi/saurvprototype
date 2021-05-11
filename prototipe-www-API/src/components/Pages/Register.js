import React, { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { graphql } from "react-apollo";
import { Auth } from 'aws-amplify';
// import { useMutation, gql } from '@apollo/client';
import { Step1, Step2, Step3, Step4, ConfirmSignUp,Step7} from '@pages/Register/index';
import { AppUser } from '@auth'
const initialState = {

  stage: 0,
  error: '',
  loading: false,
  auth_code: '',
  type:'',
  step_1: {
    username: ``,
    password: ``,
    email: ``,
    referal_code: ``,
    error: '',
  },

  step_2: {
    initials_1: '',
    initials_2: '',
    initials_3: '',
    initials_4: '',
    error: '',
  },

  step_3: {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    current_employer: '',

    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',

    expertises: [],
    skills: [],
    regional_experience: [],
    your_story: '',

    error: '',
  }
}

export class Register extends React.Component {

  constructor(props) {
    super(props)
  }
  state = initialState




  handleUpdateStep1 = field => {
    console.log("emailcheck");
    field.persist();
    if (field.target.name === 'email') {
      // [event.target.name]: event.target.value
      this.setState(prevState => ({
        step_1: {
          ...prevState.step_1,
          email: field.target.value!=null?field.target.value:'',
          error: ''
        }
      }));

    }
    else if (field.target.name === 'password') {
      this.setState(prevState => ({
        step_1: {
          ...prevState.step_1,
          password: field.target.value!=null?field.target.value:'',
          error: ''
        }
      }));

    }

    else if (field.target.name === 'phone_number') {
      this.setState(prevState => ({
        step_3: {
          ...prevState.step_3,
          phone_number: field.target.value!=null?field.target.value.replace(/\D/g, ''):'',
          error: ''
        }
      }));

    } else {
      this.setState(prevState => ({
          step_1: {
            ...prevState.step_1,
            [field.target.name]: field.target.value!=null?field.target.value:'',
            error: ''
          }
      }));
    }
  }

  validateStep1 = async e => {
    e.preventDefault();
    console.log(e);
    this.setState({ loading: true })
    try {
      // send lambda check...

      if(this.validateStep1Fields()) {
        this.setState({ stage: 1, loading: false })
        // this.setState({ stage: 'step-2', loading: false })
      }
      //console.log(this.state);
    } catch (err) {
      this.setState({ error: err, loading: false })
      // console.log('error signing up...', err)
    }
  }

  handleUpdateStep2 = field => {
    //console.log(field);
    field.persist();
    this.setState(prevState => ({
        step_2: {
          ...prevState.step_2,
          [field.target.name]: field.target.value!=null?field.target.value:'',
          error: ''
        }
    }));
  }

  validateStep2 = async e => {
    e.preventDefault()

    this.setState({ loading: true })
    try {
      // send lambda check...

      if(this.validateStep2Fields()) {
        this.setState({ stage: 'step-3', loading: false })
      }
      //console.log(this.state);
    } catch (err) {
      this.setState({ error: err, loading: false })
    }
  }
validateStep2Fields=() =>
  {

    let errors = [];
    let isValid = true;

    if (!this.state.step_2.initials_1) {
  isValid = false;
  errors.push("Please enter your initials to agree.");
  this.state.step_2.initials_1error="Please enter your initials to agree.";
}
else if (typeof this.state.step_2.initials_1 == "undefined") {
  isValid = false;
  errors.push( "Please enter your initials to agree.");
  this.state.step_2.initials_1error="Please enter your initials to agree.";
}
else {
      this.state.step_2.initials_1error="";
    }
this.state.step_2.error=errors;
return isValid;
  }


  validateStep3Fields=() =>
  {

    let errors = [];
    let isValid = true;

    if (!this.state.step_3.first_name) {
      isValid = false;
      errors.push("Please enter your First Name");
      this.state.step_3.first_nameerror="Please enter your First Name";
    }
    else if (typeof this.state.step_3.first_name == "undefined") {
      isValid = false;
      errors.push( "Please enter your First Name");
      this.state.step_3.first_nameerror="Please enter your First Name";
    }
    else {
      this.state.step_3.first_nameerror="";
    }

    if (!this.state.step_3.last_name) {
      isValid = false;
      errors.push("Please enter your Last Name");
      this.state.step_3.flast_nameerror="Please enter your Last Name";
    }
    else if (typeof this.state.step_3.last_name == "undefined") {
      isValid = false;
      errors.push( "Please enter your Last Name");
      this.state.step_3.last_nameerror="Please enter your Last Name";
    }
    else {
      this.state.step_3.last_nameerror="";
    }
    if (!this.state.step_3.phone_number) {
      isValid = false;
      errors.push("Please enter your Phone Number");
      this.state.step_3.phone_numbererror="Please enter your Phone Number";
    }
    else if (typeof this.state.step_3.phone_number == "undefined") {
      isValid = false;
      errors.push( "Please enter your Phone Number");
      this.state.step_3.phone_numberrror="Please enter your Phone Number";
    }else {
      this.state.step_3.phone_numberrror="";
    }

    if (!this.state.step_3.address_1) {
      isValid = false;
      errors.push("Please enter your Address");
      this.state.step_3.address_1error="Please enter your Address";
    }
    else if (typeof this.state.step_3.address_1 == "undefined") {
      isValid = false;
      errors.push( "Please enter your Address");
      this.state.step_3.address_1error="Please enter your Address";
    }else {
      this.state.step_3.address_1error="";
    }

    if (!this.state.step_3.address_2) {
      isValid = false;
      errors.push("Please enter Second Line Address");
      this.state.step_3.address_2error="Please enter Second Line Address";
    }
    else if (typeof this.state.step_3.address_2 == "undefined") {
      isValid = false;
      errors.push( "Please enter Second Line Address");
      this.state.step_3.address_2error="Please enter Second Line Address";
    }else {
      this.state.step_3.address_2error="";
    }

    if (!this.state.step_3.city) {
      isValid = false;
      errors.push("Please enter your city");
      this.state.step_3.cityerror="Please enter your city";
    }
    else if (typeof this.state.step_3.city == "undefined") {
      isValid = false;
      errors.push( "Please enter your city");
      this.state.step_3.cityerror="Please enter your city";
    }else {
      this.state.step_3.cityerror="";
    }

    if (!this.state.step_3.state) {
      isValid = false;
      errors.push("Please enter your state");
      this.state.step_3.stateerror="Please enter your state";
    }
    else if (typeof this.state.step_3.state == "undefined") {
      isValid = false;
      errors.push( "Please enter your state");
      this.state.step_3.stateerror="Please enter your state";
    }else {
      this.state.step_3.stateerror="";
    }

    if (!this.state.step_3.zip_code) {
      isValid = false;
      errors.push("Please enter  zip code");
      this.state.step_3.zip_codeerror="Please enter  zip code";
    }
    else if (typeof this.state.step_3.zip_code == "undefined") {
      isValid = false;
      errors.push( "Please enter zip code");
      this.state.step_3.zip_codeerror="Please enter  zip code";
    }else
    // if (typeof this.state.step_3.zip_code !== "undefined") {
    //   let pattern = new RegExp(/[^0-9]/);
    //   if (!pattern.test(this.state.step_3.zip_code)) {
    //     isValid = false;
    //     errors.push("Please enter valid zip code.");
    //     this.state.step_1.zip_codeerror = "Please enter valid zip code.";
    //   }
    //   else {
        if(this.state.step_3.zip_code.length>7)
        {
          isValid = false;
          errors.push("Please enter valid zip code.");
          this.state.step_1.zip_codeerror="Please enter valid zip code.";
        }else {
          this.state.step_3.zip_codeerror="";
        }
       // }
    // }



    if (!this.state.step_3.country) {
      isValid = false;
      errors.push("Please enter country");
      this.state.step_3.countryerror="Please enter country";
    }
    else if (typeof this.state.step_3.country == "undefined") {
      isValid = false;
      errors.push( "Please enter country");
      this.state.step_3.countryerror="Please enter country";
    }else {
      this.state.step_3.countryerror="";
    }

    if (typeof this.state.step_3.facebook !== "undefined") {
      let pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
      if (!pattern.test(this.state.step_3.facebook)) {
        isValid = false;
        errors.push("Please enter Valid Url");
        this.state.step_3.facebookerror = "Please enter Valid Url";
      }
    }
    else if (typeof this.state.step_3.facebook == "undefined") {
      isValid = false;
      errors.push( "Please enter Valid Url");
      this.state.step_3.facebookerror="Please enter Valid Url";
    }else {
      this.state.step_3.facebookerror="";
    }

    if (typeof this.state.step_3.instagram !== "undefined") {
      let pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
      if (!pattern.test(this.state.step_3.instagram)) {
        isValid = false;
        errors.push("Please enter Valid Url");
        this.state.step_3.instagramerror = "Please enter Valid Url";
      }
    }
    else if (typeof this.state.step_3.instagram == "undefined") {
      isValid = false;
      errors.push( "Please enter Valid Url");
      this.state.step_3.instagramerror="Please enter Valid Url";
    }else {
      this.state.step_3.instagramerror="";
    }
    if (typeof this.state.step_3.linkedin !== "undefined") {
      let pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
      if (!pattern.test(this.state.step_3.linkedin)) {
        isValid = false;
        errors.push("Please enter Valid Url");
        this.state.step_3.linkedinerror = "Please enter Valid Url";
      }
    }
    else if (typeof this.state.step_3.linkedin == "undefined") {
      isValid = false;
      errors.push( "Please enter Valid Url");
      this.state.step_3.linkedinerror="Please enter Valid Url";
    }else {
      this.state.step_3.linkedinerror="";
    }

    if (typeof this.state.step_3.twitter !== "undefined") {
      let pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
      if (!pattern.test(this.state.step_3.twitter)) {
        isValid = false;
        errors.push("Please enter Valid Url");
        this.state.step_3.twittererror = "Please enter Valid Url";
      }
    }
    else if (typeof this.state.step_3.twitter == "undefined") {
      isValid = false;
      errors.push( "Please enter Valid Url");
      this.state.step_3.twittererror="Please enter Valid Url";
    }else {
      this.state.step_3.twittererror="";
    }

    this.state.step_3error=errors;
    return isValid;
  }




  handleUpdateStep3 = field => {
    //console.log(field);
    field.persist();
    if (field.target.name === 'phone_number') {
      this.setState(prevState => ({
        step_3: {
          ...prevState.step_3,
          phone_number:field.target.value!=null?field.target.value.replace(/\D/g, ''):'',
          error: ''
        }
      }));

    } else {
      this.setState(prevState => ({
          step_3: {
            ...prevState.step_3,
            [field.target.name]: field.target.value!=null?field.target.value:'',
            error: ''
          }
      }));
    }

  }

  validateStep3 = async e => {
    e.preventDefault()
    // console.log(this.state);


    this.setState({ loading: true })
    try {
      // send lambda check...

      if(this.validateStep3Fields()) {
        this.signUp();
      }
      //console.log(this.state);
    } catch (err) {
      this.setState({ error: err, loading: false })
    }



  }


  signUp = async e => {
    //e.preventDefault()
    const { username, password, email, referal_code} = this.state.step_1;
    const { phone_number } = this.state.step_3;
    this.setState({ loading: true })
    try {
      console.log('registration...');
      localStorage.setItem('RegisterForm',this.state);
         // this.registration();
      this.setState({ stage: 'step-4', loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error signing up...', err)
    }
  }


  resendCode = async e => {
    e.preventDefault()
    const email = this.state.step_1.email;
    this.setState({ loading: true })
    try {
      this.setState({ type: 'reset'});
      console.log('reset-email');
      this.setState({ stage: 'reset-email', loading: false });
      this.setState({ stage: 1, loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error resending code...', err)
    }
  }

  validateStep1Fields= () =>
  {

    let errors = [];
    let isValid = true;

    if (!this.state.step_1.password) {
      isValid = false;
      errors.push("Please enter your Password.");
      this.state.step_1.passworderror="Please enter your Password.";
    }
    else if (typeof this.state.step_1.password == "undefined") {
      isValid = false;
      errors.push( "Please enter your Password.");
      this.state.step_1.passworderror="Please enter your Password.";
    }
    else {
      this.state.step_1.passworderror="";
    }
    if (!this.state.step_1.email) {
      isValid = false;
      errors.push("Please enter your email Address.");
      this.state.step_1.emailerror="Please enter your email Address.";
    }else
    if (typeof this.state.step_1.email !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.step_1.email)) {
        isValid = false;
        errors.push("Please enter valid email address.");
        this.state.step_1.emailerror="Please enter valid email address.";
      }
    } else {
      this.state.step_1.emailerror="";
    }

    this.state.step_1.error=errors;
    return isValid;
  }



  render() {
    // console.log(this.state);

    if (this.state.stage === 0) {
      return (

        <Step1 validate={this.validateStep1} fields={this.state} handleUpdate={this.handleUpdateStep1}  />
      )
    }
    if (this.state.stage === 1) {
      return (

        <Step7  usersteps={this.state}  />
      )
    }
    if (this.state.stage === 'step-2') {
      return (
        <Step2 validate={this.validateStep2} fields={this.state} handleUpdate={this.handleUpdateStep2} />
      )
    }

    if (this.state.stage === 'step-3') {
      return (
        <Step3 validate={this.validateStep3} fields={this.state} handleUpdate={this.handleUpdateStep3} signUp={this.signUp}/>
      )
    }

    if (this.state.stage === 'step-4') {
      return (
        <Step4  userdetail={this.state}/>
      )
    }

    if (this.state.stage === 'confirm-register') {
      return (
        <ConfirmSignUp validate={this.confirm} fields={this.state} handleUpdate={this.handleUpdateConfirm} resendCode={this.resendCode} />
      )
    }





  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)

    this.setState({interval})
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

}



export default Register

// resendCode = async e => {
//   e.preventDefault()
//   const email = this.state.step_1.email;
//   this.setState({ loading: true })
//   try {
//     await Auth.resendSignUp(email)
//     this.setState({ stage: 1, loading: false })
//   } catch (err) {
//     this.setState({ error: err, loading: false })
//     console.log('error resending code...', err)
//   }
// }
//
// handleUpdateReset = field => {
//   console.log(field);
//   if (field.name === 'email') {
//     this.setState(prevState => ({
//       step_1: {
//         ...prevState.step_1,
//         username: field.value,
//         email: field.value,
//         error: ''
//       }
//     }));
//
//   } else {
//     this.setState({ [field.name]: field.value, loading: false })
//   }
// }
//
// verify = async e => {
//   e.preventDefault()
//   const auth_code = this.state.auth_code;
//   const email = this.state.step_1.email;
//
//   this.setState({ loading: true })
//   try {
//     await Auth.verifyCurrentUserAttributeSubmit(email, auth_code)
//     this.setState({ loading: false })
//     navigate('/login')
//   } catch (err) {
//     this.setState({ error: err, loading: false })
//     console.log('error signing up...', err)
//   }
// }
//
// confirmSignUp = async e => {
//   e.preventDefault()
//   this.setState({ loading: true })
//
//   const auth_code = this.state.auth_code;
//   const email = this.state.step_1.email;
//
//   try {
//     this.setState({ loading: true })
//     await Auth.confirmSignUp(email, auth_code)
//     this.setState({ loading: false })
//     navigate('/login')
//   } catch (err) {
//     this.setState({ error: err, loading: false })
//     console.log('error confirming signing up...', err)
//   }
// }
//
// if(this.state.stage === 1) {
//   return (
//     <Reset fields={this.state} handleUpdate={this.handleUpdateReset} confirmSignUp={this.confirmSignUp} resendCode={this.resendCode} />
//   )
// }


