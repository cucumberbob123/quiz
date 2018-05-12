import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('indexjs loaded')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
