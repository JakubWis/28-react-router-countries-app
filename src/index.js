import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import store from './store/index';
import routes from './routes'; 

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
        <DevTools />
    </Provider>,
    document.getElementById('root')
);
