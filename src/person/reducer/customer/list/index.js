import { handleActions, createActions } from 'redux-actions'
import { identity, property, includes, without } from 'lodash'
import immutable from 'seamless-immutable'
import { proxyAxios } from '../../../../reducers/store'

export const { customer: { getList, toggle, reset } } = createActions({
    customer: {
        getList: identity,
        toggle: identity,
        reset: identity
    }
})
export const getCustomerList = () => (dispatch) => {
    proxyAxios.get('/api/customer/list')
        .then(property('data.data'))
        .then(getList)
        .then(dispatch)
}
export const recommend = ({ customer_ids, company_id }) => () => {
    proxyAxios.post(
        '/api/customer/recommend',
        {
            customer_ids,
            company_id
        }
    )
        .then(property('data.data'))
        .then(console.log)
}
const init = immutable({ list: [], checks: [] })
export default handleActions(
    {
        [getList]: (state, actions) => immutable.set(state, 'list', actions.payload),
        [toggle]: (state, actions) => {
            const { id } = actions.payload;
            return includes(state.checks, id) ?
                immutable.update(state, 'checks', without, id) :
                immutable.update(state, 'checks', Array.prototype.concat, id)
        },
        [reset]: () => init
    },
    init
)