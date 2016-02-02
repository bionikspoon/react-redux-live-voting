import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';

import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results';

const routes = (
  <Route component={App}>

    <Route path="/results"
           component={Results} />

    <Route path="/"
           component={Voting} />

  </Route>
);
const router = (<Router>{routes}</Router>);

ReactDOM.render(router, document.getElementById('app'));
