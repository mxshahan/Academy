import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store/'
import AppRouter from './Routes'
import './Styles/style.scss';
import { startLogin, LogoutUser } from './Redux/Actions/Auth';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

render(<App/>, document.getElementById('app'))

if (localStorage.getItem('auth')) {
  store.dispatch(startLogin({ token: localStorage.getItem('auth'), accType: localStorage.getItem('accType') }))
} else {
  store.dispatch(LogoutUser())    
}
