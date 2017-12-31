import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { FlatButton, RaisedButton } from 'material-ui'
import { TextField } from 'redux-form-material-ui'
import { fetchVoterDistrict } from '../API/scrapeWeb'
import { changeAddressBool } from '../actions/showAddressForm'

let ValidateAddress = ({ address, handleSubmit, fetchVoterDistrict, changeAddressBool, showForm }) => {

  return (
    <div>
      { address ? <div>
        <h2>You are eligible to vote!</h2>
        <h3>We found this address with your information. Can you confirm that you live here?</h3>
        <h1>{address}</h1>
        <div style={{ display: 'flex', width: 400, justifyContent: 'space-between' }}>
          <FlatButton
            color="#86D7EC"
            backgroundColor="#13A0C6"
            hoverColor="#86D7EC"
            onClick={() => fetchVoterDistrict({address})}>
            YES
          </FlatButton>
          <FlatButton
            secondary={true}
            backgroundColor="#13A0C6"
            hoverColor="#86D7EC"
            onClick={() => changeAddressBool(true)}
            >
            NO
          </FlatButton>
        </div>
        {showForm ? <form onSubmit={handleSubmit}>
          <Field
            id="address"
            name="address"
            component={TextField}
            hintText="Address"
            floatingLabelText="Please type your full address here"
          />
          <RaisedButton type="submit" label="submit" />
        </form> : ''}
      </div>
      : <h1>It seems like we didn't find an address for you.. How did you get here?</h1>
    }
    </div>
  )
}

const mapStateToProps = state => ({
  address: state.voters,
  showForm: state.showAddressForm
})

ValidateAddress = reduxForm({
  // a unique name for the form
  form: 'address',

})(ValidateAddress)

export default connect(mapStateToProps, { fetchVoterDistrict, changeAddressBool })(ValidateAddress)
