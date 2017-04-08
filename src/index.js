import React from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './containers/gridContainer/GridContainer.jsx';
import PlayerContainer from './containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import indexCss from './index.scss';

ReactDOM.render(
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/" component={GridContainer}></Route>
            <Route path="/player/(:id)" component={PlayerContainer}></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);