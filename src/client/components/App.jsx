import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import VoterForm from './VoterForm'

import { postVoterData, fetchVoterStatus } from '../API/scrapeWeb'

const App = ({ fetchVoterStatus, changePage }) => {
  const submit = values => {
    console.log(values)

    fetchVoterStatus(values)
  }

  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={changePage}>Go to about page via redux</button>
      {/* <VoterForm onSubmit={submit} /> */}

      <Route exact path='/' render={() => (
        <VoterForm onSubmit={submit} />
      )}/>
      {/* <Route path='/customers' component={Customers}/>
      <Route path='/products' component={Products}/>
      <Route path='/invoice' component={NewInvoice}/> */}
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  fetchVoterStatus,
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(App))
