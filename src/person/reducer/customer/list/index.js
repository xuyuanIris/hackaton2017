import { handleActions, createActions } from 'redux-actions'
import { identity, property, includes, without } from 'lodash'
import immutable from 'seamless-immutable'
import { proxyAxios } from '../../../../reducers/store'

export const { customer: { getList, toggle } } = createActions({
    customer: {
        getList: identity,
        toggle: identity
    }
})
export const getCustomerList = () => (dispatch) => {
    proxyAxios.get('/api/customer/list')
        .then(property('data.data'))
        .then(getList)
        .then(dispatch)
}
export default handleActions(
    {
        [getList]: (state, actions) => immutable.set(state, 'list', actions.payload),
        [toggle]: (state, actions) => {
            const { id } = actions.payload;
            return includes(state.checks, id) ?
                immutable.update(state, 'checks', without, id) :
                immutable.update(state, 'checks', Array.prototype.concat, id)
        }
    },
    immutable({ list: [], checks: [] })
)