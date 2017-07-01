import { combineReducers } from 'redux'
import list from './list/index'
import newCustomer from './new/index'

export default combineReducers({
    list,
    newCustomer
})