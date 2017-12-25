import React from 'react'
import VoterForm from './VoterForm'

import { postVoterData } from '../API/scrapeWeb'

const App = () => {
  const submit = values => {
    postVoterData(values)
    .then(console.log)
  }

  return (
    <div>
      <h1>Hello React!</h1>
      <VoterForm onSubmit={submit} />
    </div>
  )
}

export default App
