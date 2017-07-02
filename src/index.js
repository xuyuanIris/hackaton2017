import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import './polyfill'
import AsyncMall from './mall/pages/async'
import AsyncPerson from './person/pages/async'
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './reducers/store'
import './index.css';
import theme from './theme.config'
import Commons from './commons'

const muitheme = getMuiTheme(theme)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider muiTheme={muitheme}>
                <Commons>
                    <Route
                        path="/mall"
                        component={AsyncMall}
                    />
                    <Route
                        path="/person"
                        component={AsyncPerson}
                    />
                </Commons>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('root')
)
registerServiceWorker();