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

const muitheme = getMuiTheme(theme)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <MuiThemeProvider muiTheme={muitheme}>
                    <Route
                        path="/mall"
                        component={AsyncMall}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={muitheme}>
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