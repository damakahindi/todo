import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import todoApp from './reducers'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
