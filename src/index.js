import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/main';
import registerServiceWorker from './registerServiceWorker';
import './common/langs/i18n';


ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
