require('normalize.css/normalize.css');
require('styles/font-awesome.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('styles/app.scss');

window.jQuery = require('jquery');
require('bootstrap');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';


// Render the main component into the dom
ReactDOM.render(<Main />, document.getElementById('app'));
