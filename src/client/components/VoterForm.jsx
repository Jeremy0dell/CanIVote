import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

import Birthday from './Birthday'

let VoterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      {/* <label htmlFor="firstName">First Name</label> */}
      {/* <Field name="firstName" component="input" type="text" /> */}
      <Field
        name="firstName"
        component={TextField}
        hintText="First Name"
        floatingLabelText="First Name"
        type="text"
      />
    </div>
    <div>
      {/* <label htmlFor="lastName">Last Name</label> */}
      {/* <Field name="lastName" component="input" type="text" /> */}
      <Field
        name="lastName"
        component={TextField}
        hintText="Last Name"
        floatingLabelText="Last Name"
        type="text"
      />
    </div>
    <Birthday />
    <button type="submit">Submit</button>
  </form>
)

VoterForm = reduxForm({
  // a unique name for the form
  form: 'voter',
  onSubmit: function(values) { console.log('ehh', values)}
})(VoterForm)

export default VoterForm
