import { expect } from 'chai'
import reducer, { doRequest, resolveRequest } from './request'

describe('request', () => {
    it('doRequest', () => {
        const state = reducer({ requesetQueue: {} }, doRequest('/qqq'))
        expect(state.requesetQueue).to.has.key('/qqq')
    });
    it('resolveRequest', () => {
        const state = reducer({ requesetQueue: { '/qqq': 1, '/www': 1 } }, resolveRequest('/qqq'))
        expect(state).not.has.key('/qqq')
    });
});