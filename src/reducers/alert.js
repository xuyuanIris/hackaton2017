import { createActions, handleActions } from 'redux-actions';
import { identity } from 'lodash'

export const { alert: { show, hide } } = createActions({
    alert: {
        show: identity,
        hide: identity
    }
});
const init = {
    open: false,
    message: ''
}
export default handleActions(
    {
        [show]: (state, { payload }) => {
            return payload
        },
        [hide]: () => {
            return init
        }
    },
    {
        open: false,
        message: ''
    }
)