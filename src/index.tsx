import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
