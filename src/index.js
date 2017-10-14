import React from 'react';
import ReactDOM from 'react-dom';
import GridContainer from './containers/gridContainer/GridContainer.jsx';
import PlayerContainer from './containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.jsx';
import indexCss from './index.scss';

ReactDOM.render(
    <Provider store={appStore}>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={GridContainer}
                    >
                    </Route>
                    <Route
                        exact
                        path="/player/:id"
                        component={PlayerContainer}
                    >
                    </Route>
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);