import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { assign } from 'lodash'
import requestReducer from './request'

const reducers = {
    router,
    requestReducer
};
export const combine = other => combineReducers(assign(reducers, other))
export const injectReducer = store => rdsObj => store.replaceReducer(combine(rdsObj))
export default combine(reducers);