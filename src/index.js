import React from 'react';
import ReactDOM from 'react-dom';
import GridContainer from 'containers/gridContainer/GridContainer.jsx';
import PlayerContainer from 'containers/playerContainer/PlayerContainer.jsx';
import {Provider} from 'react-redux';
import {ThemeProvider, injectGlobal} from 'styled-components';
import appStore from 'store/appStore';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary.jsx';
import AppShell from 'components/appShell/AppShell.jsx';
import {registerSW} from 'helpers/serviceWorkerHelper';

const theme = {
    PRIMARY: '#888888',
    PRIMARY_DARK: '#222222',
    PRIMARY_LIGHT: '#dddddd',
    DIVIDER: '#666666',
    ERROR_COLOUR: '#ea5a5a'
};

injectGlobal([`
    @font-face {
        font-family: 'icomoon';
        src: url('/fonts/icomoon.eot?1ste5n');
        src: url('/fonts/icomoon.eot?1ste5n#iefix') format('embedded-opentype'),
            url('/fonts/icomoon.ttf?1ste5n') format('truetype'),
            url('/fonts/icomoon.woff?1ste5n') format('woff'),
            url('/fonts/icomoon.svg?1ste5n#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: black;
        font-family:
            "HelveticaNeue-Light",
            "Helvetica Neue Light",
            "Helvetica Neue",
            Helvetica, Arial,
            "Lucida Grande",
            sans-serif;
    }
`]);

registerSW();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={appStore}>
            <ErrorBoundary>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) =>
                                <AppShell>
                                    <GridContainer {...props}/>
                                </AppShell>
                            }
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
        </Provider>
    </ThemeProvider>,
    document.getElementById('app')
);