import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App.jsx';
import {Provider, connect} from 'react-redux';
import appStore from './store/appStore';
import {Router, Route, browserHistory, hashHistory} from 'react-router';

ReactDOM.render(
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/(:id)" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);