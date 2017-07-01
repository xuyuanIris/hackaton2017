import { combineReducers } from 'redux'
import { proxyAxios } from './../../reducers/store'
import malls from './mall/index'
import customer from './customer/index'

export const doTest = () => () => {
    proxyAxios.get('/api')
}

export default combineReducers({
    malls,
    customer
})