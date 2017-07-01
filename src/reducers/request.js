import { createActions, handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';
import { identity } from 'lodash'

export const { doRequest, resolveRequest, rejectRequest } = createActions({
    doRequest: identity,
    resolveRequest: identity,
    rejectRequest: identity
});

export default handleActions(
    {
        [doRequest]: (state, { payload: url }) => {
            return immutable.setIn(state, ['requesetQueue', url], 1)
        },
        [resolveRequest]: (state, { payload: url }) => {
            return immutable.update(state, 'requesetQueue', immutable.without, url)
        },
        [rejectRequest]: (state, { payload: url }) => {
            return immutable.without(state.requesetQueue, url)
        }
    },
    immutable({ requesetQueue: {} })
)