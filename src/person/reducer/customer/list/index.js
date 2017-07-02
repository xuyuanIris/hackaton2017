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
export const getCustomerList = ({ companyId }) => (dispatch) => {
    proxyAxios.get('/api/customer/list', { params: { company_id: companyId } })
        .then(property('data.data'))
        .then(getList)
        .then(dispatch)
}
export const recommend =
    ({ customer_ids, company_id, name, tel: mobile_tel, gender, remark }) => () => proxyAxios.post(
        '/api/customer/recommend',
        {
            customer_ids,
            company_id,
            name,
            mobile_tel,
            gender,
            remark
        }
    )
        .then(property('data.retCode'))
        .then(retCode => {
            return retCode === 0 ? 'success' : Promise.reject('fail')
        })
const init = { list: [], checks: [] }
export default handleActions(
    {
        [getList]: (state, actions) => immutable.set(state, 'list', actions.payload),
        [toggle]: (state, actions) => {
            const { id } = actions.payload;
            const checks = state.checks
            const retChecks = includes(checks, id) ? without(checks, id) : [...checks, id]
            return {
                ...state,
                checks: retChecks
            }
        },
        [reset]: () => init
    },
    init
)