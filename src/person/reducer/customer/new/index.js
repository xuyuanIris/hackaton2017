import { handleActions, createActions } from 'redux-actions'
import { identity, assign, property } from 'lodash'
import { proxyAxios } from '../../../../reducers/store'

export const { customerNew: { setValue, reset } } = createActions({
    customer_new: {
        setValue: (key, value) => ({ key, value }),
        reset: identity
    }
})
export const saveCustomer = (params) => () => proxyAxios.post('/api/customer/save', params)
    .then(property('data.retCode'))
    .then(retCode => {
        return retCode === 0 ? 'success' : Promise.reject('fail')
    })

const init = {
    name: '',
    mobile_tel: '',
    gender: '',
    remark: ''
}
export default handleActions(
    {
        [setValue]: (state, { payload: { key, value } }) => assign({}, state, {
            [key]: value
        }),
        [reset]: () => init
    },
    init
)