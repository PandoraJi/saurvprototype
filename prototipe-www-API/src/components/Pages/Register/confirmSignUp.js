import React from 'react'
import { Link } from 'gatsby'
import { LayoutLogin } from '@layout'

import { AuthForm, Email, ConfirmationCode } from '@forms'

class ConfirmSignUp extends React.Component {

  render() {
    console.log(this.props);

    if(this.props.fields.stage===0)
    {
      return (
        <LayoutLogin>
          <div className="login-wrap mx-auto text-center">
            <AuthForm error={this.props.fields.error}>

              <Email
                handleUpdate={this.props.handleUpdate}
                email={this.props.fields.email}
                autoComplete="off"
                errorContent={this.props.fields.emailerror}
              />
              <button
                onClick={e => this.props.confirm(e)}
                className="btn bg-red w-full mt-2 mb-5"
                disabled={this.props.fields.loading}
              >
                {this.props.fields.loading ? 'Sending...' : 'Confirm'}
                {this.props.fields.loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </button>

              <div className="flex flex-row justify-between">
                <p className="font-bold text-sm">
                  Already have an account? <Link rel="preload" crossorigin="anonymous" to="/login">Login here</Link>
                </p>

                <p className="font-bold text-sm">
                  Lost your code?
                  <button
                    className="ml-1"
                    onClick={e => this.props.resendCode(e)}
                    disabled={this.props.fields.loading}
                  >
                    <span className="font-bold text-sm text-blue">Resend Code</span>
                  </button>
                </p>
              </div>


            </AuthForm>
          </div>
        </LayoutLogin>
      )

    }
    else {
      return (
        <LayoutLogin>
          <div className="login-wrap mx-auto text-center">
            <AuthForm error={this.props.fields.error}>

              <Email
                handleUpdate={this.props.handleUpdate}
                email={this.props.fields.email}
                autoComplete="off"
                errorContent={this.props.fields.emailerror}
              />
              <ConfirmationCode
                handleUpdate={this.props.handleUpdate}
                auth_code={this.props.fields.auth_code}
                autoComplete="off"
                errorContent={this.props.fields.auth_codeerror}
                disabled={true}
              />
              <button
                onClick={e => this.props.confirm(e)}
                className="btn bg-red w-full mt-2 mb-5"
                disabled={this.props.fields.loading}
              >
                {this.props.fields.loading ? 'Sending...' : 'Confirm'}
                {this.props.fields.loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </button>

              <div className="flex flex-row justify-between">
                <p className="font-bold text-sm">
                  Already have an account? <Link rel="preload" crossorigin="anonymous" to="/login">Login here</Link>
                </p>

                <p className="font-bold text-sm">
                  Lost your code?
                  <button
                    className="ml-1"
                    onClick={e => this.props.resendCode(e)}
                    disabled={this.props.fields.loading}
                  >
                    <span className="font-bold text-sm text-blue">Resend Code</span>
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
export default ConfirmSignUp
