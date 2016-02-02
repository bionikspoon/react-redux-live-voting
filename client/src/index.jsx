import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import {setState} from './action_creators';
import reducer from './reducer';
import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results';

const store = createStore(reducer);
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => store.dispatch(setState(state)));

const routes = (
  <Route component={App}>

    <Route path="/results"
           component={Results} />

    <Route path="/"
           component={Voting} />

  </Route>
);
const router = (
  <Provider store={store}>

    <Router>{routes}</Router>

  </Provider>);

ReactDOM.render(router, document.getElementById('app'));
