import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import remoteActionMiddleware from './remote_action_middleware';
import {setState} from './action_creators';
import reducer from './reducer';
import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);
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
