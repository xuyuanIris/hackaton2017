import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { assign } from 'lodash'

const reducers = {
    router
};
export const combine = other => combineReducers(assign(reducers, other))
export const injectReducer = store => rdsObj => store.replaceReducer(combine(rdsObj))
export default combine(reducers);