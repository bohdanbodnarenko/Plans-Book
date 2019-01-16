import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import { reduxFirestore ,getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'

import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import config from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({ axios }))
    // reduxFirestore(config),
    // reactReduxFirebase(config),
    )
);

ReactDOM.render(<Provider store={ store }>< App /></Provider>, document.getElementById('root'));
