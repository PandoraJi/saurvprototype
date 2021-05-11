import React from 'react'
import { navigate } from '@reach/router'
 import { Link } from 'gatsby'
import { Step8} from '@pages/Register/index';
import {ConfirmSignUp} from '@pages/Register/index';

const initialState = {

  stage: 0,
  error: '',
  loading: false,
  type:"",
  auth_code: '',
  email: ``,
  username: ``,
}

class ConfirmEmail extends React.Component {
  state = initialState

  handleUpdateConfirm = field => {
    field.persist();
    if (field.target.name === 'email') {
      this.setState({
        email: field.target.value!=null?field.target.value:'',
        // username: field.target.value,
      })

    } else {
      this.setState({
        [field.target.name]: field.target.value!=null?field.target.value:'',
      })
    }
  }


  async componentDidMount() {

    console.log(this.props.token);
    if(this.props.token!=null && this.props.token!=undefined)
    {
      this.setState({auth_code:this.props.token});
      this.setState({stage:1});
    }
  }

  validateStep1Fields= () =>
  {

    let errors = [];
    let isValid = true;

    if (!this.state.auth_code) {
      isValid = false;
      errors.push("Please enter your Password.");
      this.state.auth_codeerror="Please enter your Password.";
    }
    else if (typeof this.state.auth_code == "undefined") {
      isValid = false;
      errors.push( "Please enter your Password.");
      this.state.auth_codeerror="Please enter your Password.";
    }
    else {
      this.state.auth_codeerror="";
    }
    if (!this.state.email) {
      isValid = false;
      errors.push("Please enter your email Address.");
      this.state.emailerror="Please enter your email Address.";
    }else
    if (typeof this.state.email !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        isValid = false;
        errors.push("Please enter valid email address.");
        this.state.emailerror="Please enter valid email address.";
      }
    } else {
      this.state.emailerror="";
    }

    this.state.error=errors;
    return isValid;
  }


  resendCode = async e => {
    e.preventDefault()
    const { email } = this.state;
    this.setState({ loading: true })
    try {
        this.setState({ type: '' });
        this.setState({ stage: 0, loading: false });
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error resending code...', err)
    }
  }

  verify = async e => {
    e.preventDefault()
    const { email } = this.state;
    const { auth_code } = this.state;
    this.setState({ loading: true })
    try {

      this.setState({ type: 'verifyEmail'});
      this.setState({ stage: 'verifyEmail', loading: false });

    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error signing up...', err)
    }
  }

  confirm = async e => {
    e.preventDefault()
    console.log('CONFIRM!');
    this.setState({ loading: true })
    const { email } = this.state;
    // const { auth_code } = this.state;

    try {
      if(this.state.stage===0) {
        this.setState({ type: 'confirmEmail' });
        this.setState({ stage: 'confirmEmail', loading: false });
      }
      else {
        this.setState({ type: 'verifyEmail' });
        this.setState({ stage: 'verifyEmail', loading: false });
      }
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error confirming signing up...', err)
    }
  }

  render() {

    if (this.state.stage === "confirmEmail") {
      return (
        <Step8 useremail={this.state} />
      )
    }
    else  if (this.state.stage === "verifyEmail") {
      return (
        <Step8 useremail={this.state} />
      )
    }
    else {
      return (
        <ConfirmSignUp confirm={this.confirm} fields={this.state} handleUpdate={this.handleUpdateConfirm}
                       resendCode={this.resendCode} />
      )
    }
  }

}

export default ConfirmEmail
