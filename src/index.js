// External Dependency
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

// Internal Dependency
import Main from './pages/main'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import i18n from "./common/langs/i18n";




// append app to dom
ReactDOM.render(<I18nextProvider i18n={ i18n }><Main /></I18nextProvider>, document.getElementById('root'));
registerServiceWorker();
