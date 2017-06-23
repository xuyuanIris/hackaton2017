import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                123
                <Route exact path="/*" component={App} />
                <Route exact path="/1" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('root')
)
registerServiceWorker();
