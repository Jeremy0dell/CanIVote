import React from 'react'
import { Field, reduxForm } from 'redux-form'

let VoterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="birthday">Birthday</label>
      <Field name="birthday" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>
)

VoterForm = reduxForm({
  // a unique name for the form
  form: 'voter'
})(VoterForm)

export default VoterForm
