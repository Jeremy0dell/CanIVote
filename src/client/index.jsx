import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import store, { history } from './configure-store'


import { counter } from './reducers/counter'
import { voters } from './reducers/voters'

import App from './components/App.jsx'

store.subscribe(() => console.log(store.getState()))
// console.log(store.getState())

render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </Router>
  </Provider>, document.getElementById('app')
)
