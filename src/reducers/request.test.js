import reducer, { doRequest, resolveRequest } from './request'
import { expect } from 'chai'

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