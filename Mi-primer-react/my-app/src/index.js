import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import HolaMundo from './components/holamundo.js'
import Tarjeta from './components/card';

ReactDOM.render(<HolaMundo/>, document.getElementById('root'));

ReactDOM.render(<Tarjeta/>, document.getElementById('root'));
registerServiceWorker();