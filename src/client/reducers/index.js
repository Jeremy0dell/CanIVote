import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import counter from './counter'
import voters from './voters'

export default combineReducers({ counter, voters, form: formReducer, routing: routerReducer })
