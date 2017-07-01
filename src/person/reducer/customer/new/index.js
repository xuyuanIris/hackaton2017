import { handleActions, createActions } from 'redux-actions'
import { identity, assign } from 'lodash'

export const { customerNew: { setValue, reset } } = createActions({
    customer_new: {
        setValue: (key, value) => ({ key, value }),
        reset: identity
    }
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