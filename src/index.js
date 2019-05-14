import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import storeInstance from './modules/store/store';

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
