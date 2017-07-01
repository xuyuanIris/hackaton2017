import { createActions, handleActions } from 'redux-actions';

export const { doRequest, resolveRequest, rejectRequest } = createActions({
    // function form; payload creator defined inline
    doRequest: [
        (first) => [first],             // payload
        (first, second) => ({ second }) // meta
    ],
    resolveRequest: [
        (first) => [first],             // payload
        (first, second) => ({ second }) // meta
    ],
    rejectRequest: [
        (first) => [first],             // payload
        (first, second) => ({ second }) // meta
    ]
});

export default handleActions(
    {
        [doRequest]: (state, actions) => {
            console.log(actions)
            return state
        }
    },
    {
        requesetQueue: {}
    }
)