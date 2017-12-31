import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import counter from './counter'
import voters from './voters'
import district from './district'
import showAddressForm from './showAddressForm'


export default combineReducers({
  counter,
  voters, 
  district,
  showAddressForm,
  form: formReducer,
  routing: routerReducer
})
