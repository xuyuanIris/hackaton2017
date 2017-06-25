import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import './polyfill'
import AsyncMall from './mall/pages/async'
import AsyncPerson from './person/pages/async'
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './reducers/store'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <MuiThemeProvider>
                    <Route
                        path="/mall"
                        component={AsyncMall}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Route
                        path="/person"
                        component={AsyncPerson}
                    />
                </MuiThemeProvider>
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('root')
)
registerServiceWorker();