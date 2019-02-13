import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdventureGame from './AdventureGame'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AdventureGame />, document.getElementById('root'));
registerServiceWorker();
