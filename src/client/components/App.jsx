import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import VoterForm from './VoterForm'
import Loading from './Loading'
import ValidateAddress from './ValidateAddress'
import District from './District'
import makeSpinner from '../containers/SpinHOC'

import { postVoterData, fetchVoterStatus, fetchVoterDistrict } from '../API/scrapeWeb'

const App = ({ fetchVoterStatus, fetchVoterDistrict, changePage }) => {

  const submitAddress = values => fetchVoterDistrict(values)
  const submit = values => fetchVoterStatus(values)

  return (
    <div>
      <h1>CanIVote.com!</h1>
      <button onClick={changePage}>Go to home page</button>
      {/* <VoterForm onSubmit={submit} /> */}

      <Route exact path='/' render={() => (
        <VoterForm onSubmit={submit} />
      )}/>

      <Route path='/searching' component={Loading}/>
      <Route path='/district' component={District}/>

      <Route path='/confirm' render={() => (
        <ValidateAddress onSubmit={submitAddress} />
      )}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/'),
  fetchVoterStatus,
  fetchVoterDistrict,
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(App))
