import React from 'react'
import { Link } from 'gatsby'
import { LayoutLogin } from '@layout'

import { AuthForm, Email, Password, ReferalCode } from '@forms'


class Step1 extends React.Component {

  render() {

    return (
      <LayoutLogin>
        <div className="login-wrap mx-auto text-center">
        <AuthForm title="Register here" error={this.props.fields.error}>
          <Email
            handleUpdate={this.props.handleUpdate}
            email={this.props.fields.step_1.email}
            autoComplete="off"
             errorContent={this.props.fields.step_1.emailerror}
          />
          <ReferalCode
            handleUpdate={this.props.handleUpdate}
            referalCode={this.props.fields.step_1.referal_code}
            autoComplete="off"
          />


          <Password
            handleUpdate={this.props.handleUpdate}
            password={this.props.fields.step_1.password}
            autoComplete="off"
          errorContent={this.props.fields.step_1.passworderror}
          />

          {this.props.fields.step_1.error!=null && this.props.fields.step_1.error!=undefined ? '' : ''}
          {this.props.fields.step_1.error &&  (
            <div title="Show Error">
              <span
                aria-hidden="true"
              >{this.props.fields.step_1.error}</span> </div>
          )}


          <button
            onClick={e => this.props.validate(e)}
            type="submit"
            disabled={this.props.fields.loading}
            className="btn bg-red w-full mt-2 mb-5"
          >
            {this.props.fields.loading ? 'Procesing Data...' : 'Next'}
            {this.props.fields.loading && (
              <span
                role="status"
                aria-hidden="true"
              />
            )}
          </button>

          <p className="text-center text-sm font-bold">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </AuthForm>

          <p className="text-center font-bold">
            <Link to="/confirm-email">Confirm Email</Link>
          </p>
        </div>
        </LayoutLogin>
    )
  }
}
export default Step1
