require('normalize.css/normalize.css');
require('styles/font-awesome.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('styles/app.scss');

window.jQuery = require('jquery');
require('bootstrap');

import 'babel-polyfill';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, browserHistory } from 'react-router'
import Join from './components/Join'
import Privacy from './components/Privacy'

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/join" component={Join} />
    <Route path="/privacy" component={Privacy} />
  </Router>, document.getElementById('app'));
