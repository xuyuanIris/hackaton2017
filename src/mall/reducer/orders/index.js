import { handleActions, createActions } from 'redux-actions'
import { identity, assign, property } from 'lodash'
import { proxyAxios } from './../../../reducers/store'

export const { mallOrder: { getList, reset } } = createActions({
    mall_order: {
        getList: identity,
        reset: identity
    }
})
export const getCCList = (companyId) => (dispatch) => proxyAxios.get(`/api/company/customer/list?company_id=${companyId}`)
    .then(property('data.data'))
    .then(getList)
    .then(dispatch)

const init = {
    list: []
}
export default handleActions(
    {
        [getList]: (state, { payload }) => assign({}, state, {
            list: payload
        }),
        [reset]: () => init
    },
    init
)