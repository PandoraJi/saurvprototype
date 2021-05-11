import React,{useEffect} from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
// import { Auth } from 'aws-amplify'
import { AuthForm, Email, Password, ConfirmationCode } from '@forms'
import { LayoutLogin } from '@layout'
import { gql } from '@apollo/client'
import { useMutation} from '@apollo/react-hooks'
import { Step8} from '@pages/Register/index';


const initialState = {
  email: ``,
  auth_code: ``,
  password: ``,
  type:``,
  error: ``,
  loading: false,
  stage: 0,
}


class Reset extends React.Component {
  state = initialState
  handleUpdate = field => {
    field.persist();

    this.setState({
      [field.target.name]: field.target.value!=null?field.target.value:'',
      error: '',
    })
  }


  async componentDidMount() {

    console.log(this.props.token);
    // const response = await validatePasswordResetToken(this.props.token)
    // if (response.ok) {
    //   this.setState({ isValidated: true })
    // } else {
    //   // some error
    // }

    if(this.props.token!=null && this.props.token!=undefined)
    {
      this.setState({auth_code:this.props.token});
      this.setState({stage:1});
    }
  }

  reset = async e => {
    e.preventDefault()
    const { email } = this.state
    try {
      if (this.validateStep1Fields()) {
        this.setState({ loading: true })
        this.setState({ type: 'reset'});
        console.log('reset-email');
        this.setState({ stage: 'reset-email', loading: false });
      }
    }catch (err) {
      this.setState({ error: err, loading: false })
      //console.log('error...: ', err)
    }

  }

  resetagain = async e => {
    e.preventDefault()
    const { email } = this.state
    try {
      if (this.validateStep1Fields()) {
        this.setState({ loading: true })
        this.setState({ type: ''});
        console.log('reset');
        navigate('/reset')
        this.setState({ stage: 0, loading: false });
      }
    }catch (err) {
      this.setState({ error: err, loading: false })
      //console.log('error...: ', err)
    }

  }





  validateStep1Fields= () =>
  {
 this.state.type="";
    let errors = [];
    let isValid = true;

    if (this.state.stage === 0) {
      if (!this.state.email) {
        isValid = false;
        errors.push("Please enter your email Address.");
        this.state.emailerror = "Please enter your email Address.";
      } else if (typeof this.state.email !== "undefined") {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          isValid = false;
          errors.push("Please enter valid email address.");
          this.state.emailerror = "Please enter valid email address.";
        }
      } else {
        this.state.emailerror = "";
      }
    }
    else
    {


      if (!this.state.password) {
        isValid = false;
        errors.push("Please enter your Password.");
        this.state.passworderror = "Please enter Password";
      }
      else if (typeof this.state.password == "undefined") {
        isValid = false;
        errors.push( "Please enter your Password.");
        this.state.passworderror = "Please enter Password";
      }
      else {
        this.state.passworderror ="";
      }
      if (!this.state.email) {
        isValid = false;
        errors.push("Please enter your email Address.");
        this.state.emailerror = "Please enter your email Address.";
      } else if (typeof this.state.email !== "undefined") {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          isValid = false;
          errors.push("Please enter valid email address.");
          this.state.emailerror = "Please enter valid email address.";
        }
      } else {
        this.state.emailerror = "";
      }
    }
    this.state.error=errors;
    return isValid;
  }




  confirmReset = async e => {
    e.preventDefault()
    const { email, auth_code, password } = this.state
    this.setState({ loading: true })
    if(this.validateStep1Fields()) {
      this.setState({ type: 'reset-submit'});
      this.setState({ stage: 'reset-submit', loading: false });

    }
  }

  render() {
    if (this.state.stage === 0) {
      return (
        <LayoutLogin>
        <div className="login-wrap mx-auto text-center">
        <AuthForm title="Recover your password" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="on"
            errorContent={this.state.emailerror}
          />
          <button
            onClick={e => this.reset(e)}
            type="submit"
            className="btn bg-red w-full mt-2 mb-5"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Send recovery code'}
            {this.state.loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </button>

          <p className="text-center font-bold">
            <Link rel="preload" crossorigin="anonymous" to="/login">Back to Login</Link>
          </p>
        </AuthForm>
        </div>
        </LayoutLogin>
      )

    }
    if (this.state.stage === "reset-email") {
      return (
      <Step8 useremail={this.state} />
      )
    }
    else  if (this.state.stage === "reset-submit") {
      return (
        <Step8 useremail={this.state} />
      )
    }
    if (this.state.stage === 1) {

      return (
        <LayoutLogin>
          <div className="login-wrap mx-auto text-center">
            <AuthForm title="Confirm Password Update" error={this.state.error}>
              <Email
                handleUpdate={this.handleUpdate}
                email={this.state.email}
                autoComplete="on"
                errorContent={this.state.emailerror}
              />
              <ConfirmationCode
                handleUpdate={this.handleUpdate}
                auth_code={this.state.auth_code}
                autoComplete="off"
                errorContent={this.state.auth_codeerror}
                disabled={true}
              />
              <Password
                handleUpdate={this.handleUpdate}
                password={this.state.password}
                autoComplete="on"
                errorContent={this.state.passworderror}
              />

              <button
                onClick={e => this.confirmReset(e)}
                type="submit"
                className="btn bg-red w-full mt-2 mb-5"
                disabled={this.state.loading}
              >
                {this.state.loading ? null : 'Confirm Reset'}
                {this.state.loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </button>

              <div className="flex flex-row justify-between">
                <p className="font-bold text-sm">
                  <Link rel="preload" crossorigin="anonymous" to="/login">Back to Sign In</Link>
                </p>

                <p className="font-bold text-sm">
                  Lost your code?
                  <button
                    className="ml-1"
                    onClick={e => this.resetagain(e)}
                    disabled={this.state.loading}
                  >
                    Resend Code
                  </button>
                </p>
              </div>

            </AuthForm>


          </div>
        </LayoutLogin>
      )
    }
  }
}

export default Reset
