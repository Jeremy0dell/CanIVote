import axios from 'axios'
import { push, pop } from 'react-router-redux'
import { fetchVoterStatus as fetchVoter } from '../actions/voters'

const URL = 'http://localhost:3000/api/selenium'

export const postVoterData = (body) => axios.post(URL, body)

export const fetchVoterStatus = (formData) => {
  const request = postVoterData(formData)

  return (dispatch) => {
    dispatch(push('/searching'))
    return request
    .then(res => {
      return dispatch(fetchVoter(res.data))
    })
    .then(thing => {
      console.log('what is thing', thing)
      dispatch(push('/confirm'))
    })
    .catch(err => console.log('err is ', err))
  }
}
