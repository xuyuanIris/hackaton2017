import { handleActions, createActions } from 'redux-actions'
import { identity, property } from 'lodash'
import immutable from 'seamless-immutable'
import { proxyAxios } from '../../../../reducers/store'

export const { customer: { getList } } = createActions({
    'customer/getList': identity
})
export const getCustomerList = () => (dispatch) => {
    proxyAxios.get('/api/customer/list')
        .then(property('data.data'))
        .then(getList)
        .then(dispatch)
}
export default handleActions(
    {
        [getList]: (state, actions) => immutable.set(state, 'list', actions.payload)
    },
    immutable({ list: [] })
)