import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer, { injectReducer } from './reducer'
import ProxyAxios from './../js/proxyAxios'

export const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, middleware))
)
export const proxyAxios = new ProxyAxios({
    before(...o) {
        console.log(...o)
    },
    after(...o) {
        console.log(...o)
    }
})
export const injectReducerWithStore = injectReducer(store)
export default store