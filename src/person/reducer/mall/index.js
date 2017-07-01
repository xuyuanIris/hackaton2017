import { handleActions, createActions } from 'redux-actions'
import { identity, property } from 'lodash'
import immutable from 'seamless-immutable'
import { proxyAxios } from '../../../reducers/store'

export const { getList } = createActions({
    getList: identity
})
export const getCompanyList = () => (dispatch) => {
    proxyAxios.get('/api/company/list')
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