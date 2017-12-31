import axios from 'axios'
import { push, pop } from 'react-router-redux'
import { fetchVoterStatus as fetchVoter } from '../actions/voters'
import { fetchVoterDistrict as fetchDistrict } from '../actions/district'

const URL = 'http://localhost:3000/api/selenium'

export const postVoterData = (body) => axios.post(URL, body)
export const postVoterAddr = (body) => axios.post(`${URL}/district`, body)

export const fetchVoterStatus = (formData) => {
  console.log('this is called')
  const request = postVoterData(formData)

  return (dispatch) => {
    console.log('does fetchVoterStatus push??')
    dispatch(push('/searching'))
    return request
    .then(res => {
      console.log('in this case, res is:', res)
      return dispatch(fetchVoter(res.data))
    })
    .then(thing => {
      console.log('what is thing', thing)
      dispatch(push('/confirm'))
    })
    .catch(err => console.log('err is ', err))
  }
}

export const fetchVoterDistrict = (formData) => {
  console.log('formData is', formData)
  const request = postVoterAddr(formData)

  return (dispatch) => {
    console.log('will it push at all?')
    dispatch(push('/searching'))
    return request
    .then(res => {
      console.log('res is:', res)
      return dispatch(fetchDistrict(res.data))
    })
    .then(thing => {
      console.log('what is thing', thing)
      dispatch(push('/district'))
    })
    .catch(err => console.log('err is ', err))
  }
}
