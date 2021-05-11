import React , { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Form,Message, Input, TextArea, Button, Select,Icon ,Label} from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import ReactTooltip from "react-tooltip";
export function AuthForm({ children, title, error }) {
  return (
    <div className="">
        <Form  className="ui form" >
          <h2 className="text-xlsmall md:text-lg mb-10">{title}</h2>
          {error && (
            <p className="text-danger">
              {error.message ? error.message : error}
            </p>
          )}
          {children}
        </Form>
    </div>
  )
}

const selectStyles = {
  control: styles => ({ ...styles,
    backgroundColor: 'white',
    minHeight: '45px',
    color: 'rgba(30, 32, 37, 1)',
    borderRadius: '12px',
    marginTop: '4px',
    paddingLeft: '12px'
  }),
  input: styles => ({ ...styles,
  //height: '45px',
  }),
  placeholder: styles => ({ ...styles,
  //height: '35px',
  color: '#a1a1aa'
  }),
  singleValue: (styles, { data }) => ({ ...styles,
  //height: '45px',
  }),
  multiValue: (styles, { data }) => ({ ...styles,
    backgroundColor: '#2a99f7',
    borderRadius: '12px'
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: 'white',
    fontSize: '12px',
    padding: 0,
    textTransform: 'uppercase'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#2a99f7',
    backgroundColor: 'white',
    borderRadius: '100%',
    padding:0,
    height: '14px',
    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    ':hover': {
      backgroundColor: 'none',
      color: 'black',
    },
  }),
  valueContainer: (styles, { data }) => ({ ...styles,
    minHeight: '35px',
  }),
};

const options2 = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


export function SelectCreateMulti({handleUpdate, options, label, id, placeholder,errorContent,defaultValue}) {
  return (
    <div className="form-group-select">
    <label htmlFor={id}>{label}</label>
    <Form.Dropdown
       // label={label}
       styles={selectStyles}
       id={id}
      clearable
      fluid
      multiple
      selection
       search
       searchInput={{ id: id }}
       onChange={(e) => {handleUpdate(e)}}
        options={options}
        placeholder={placeholder}
       defaultValue={defaultValue}
       className="form-control"
    />
      {errorContent && <Label pointing color='red'>{errorContent}</Label>}
    </div>
  )
}


export function SelectSingle({handleUpdate,options, label, id, placeholder,errorContent,defaultValue}) {
  return (
    <div className="form-group-select">
    <label htmlFor={id}>{label}</label>
    <Form.Dropdown
      // label={label}
      styles={selectStyles}
      id={id}
      clearable
      fluid
      selection
      search
      searchInput={{ id: id }}
      onChange={(e) => {handleUpdate(e)}}
      options={options}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="form-control"
    />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}

export function SelectCountry({handleUpdate, options, label, id, placeholder,errorContent}) {
  return (
      <div className="form-group-select">
      <label htmlFor={id}>{label}</label>
        <Form.Dropdown
          // label={label}
          styles={selectStyles}
          id={id}
          clearable
          fluid
          selection
          search
          searchInput={{ id: id }}
          onChange={(e) => {handleUpdate(e)}}
          options={options}
          placeholder={placeholder}
          className="form-control"
        />
        {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
      </div>
  )
}

export function InputText({ handleUpdate, label, name, value, id, placeholder, autoComplete,errorContent }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        control={Input}
        name={name}
        type="text"
        value={value}
        className="form-control"
        autoComplete={autoComplete}
        id={id}
        placeholder={placeholder}

      />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}

export function InputTextArea({ handleUpdate, label, name, value, id, placeholder, autoComplete ,errorContent}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Form.TextArea
        onChange={(e) => {handleUpdate(e)}}
        name={name}
        control={TextArea}
        className="form-control"
        autoComplete={autoComplete}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
      />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}


export function Email({ handleUpdate, email, autoComplete,errorContent}) {
  // console.log(handleUpdate);
  return (
    <div className="form-group">
      <label htmlFor="enterEmailAddress">Email Address</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        control={Input}
        name="email"
        type="email"
        value={email}
        className="form-control"
        autoComplete={autoComplete}
        id='form-input-control-error-email'
        aria-describedby="emailHelp"
        placeholder="Enter email"
     />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}

export function Phone({ handleUpdate, phone_number, autoComplete }) {

  return (
    <div className="form-group">
    <label htmlFor="exampleInputPhoneNum1">Phone Number</label>
    <NumberFormat
      placeholder="+1 (###) ###-####"
      onChange={(e) => {handleUpdate(e)}}
      name="phone_number"
      value={phone_number}
      type="tel"
      className="form-control"
      autoComplete={autoComplete}
      format="+#############"
      mask="_"
    />
    </div>
  )
}

export function Password({ handleUpdate, password, autoComplete,errorContent }) {

  return (
    <div className="form-group">
      <label htmlFor="enterPassword">Password</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        autoComplete={autoComplete}
        name="password"
        value={password}
        type="password"
        className="form-control"
        placeholder="Password"
        id="enterPassword"
      />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}


export function ReferalCode({ handleUpdate, ref_code, autoComplete ,errorContent}) {
  let isActive=false;
  const toggleClass = (isActive) => {
    console.log(isActive);
  };
  return (
    <div className="form-group">
      <label htmlFor="enterRefCode">Referal Code</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        autoComplete={autoComplete}
        name="ref_code"
        value={ref_code}
        type="text"
        className="form-control"
        placeholder="######"
        id="enterRefCode"
        aria-describedby="ref_code-explanation"
        icon={<i className="question circle outline link icon" data-tip='' style={{color:'#2a99f7'}}  data-for='test' ></i>}
      />
      <ReactTooltip className={isActive ? 'active-tooltip': null} id="test" place="top" effect="solid" >
        Prototipe is referral based community,so everyone is tagged with a code after being referred by a fellow journalist.If  you
        don't have a code.It doesn't meant we don't want to hear from you! Either connect with a journalist colleague in our network,
        or <span style={{color:'rgba(42, 153, 247)'}}>contact us</span> directly
      </ReactTooltip>

      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}

export function ConfirmationCode({ handleUpdate, auth_code, autoComplete,errorContent,disabled }) {
  return (
    <div className="form-group">
      <label htmlFor="enterCode">Confirmation Code</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        autoComplete={autoComplete}
        name="auth_code"
        value={auth_code}
        type="text"
        className="form-control"
        placeholder="######"
        id="enterCode"
        disabled={disabled}
      />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}

export function Initials({ handleUpdate, initials, autoComplete,errorContent }) {
  return (
    <div className="form-group">
      <label htmlFor="enterInitials">Initials</label>
      <Form.Input
        onChange={(e) => {handleUpdate(e)}}
        name="initials"
        type="text"
        value={initials}
        className="form-control"
        autoComplete={autoComplete}
        id="enterInitials"
        aria-describedby="initialsHelp"
        placeholder="Type your initials to agree"
      />
      {errorContent && <Label  pointing color='red'>{errorContent}</Label>}
    </div>
  )
}
