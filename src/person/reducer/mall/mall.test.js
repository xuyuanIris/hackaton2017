import { expect } from 'chai'
import reducer, { getList } from './index'

describe('request', () => {
    it('doRequest', () => {
        const state = reducer({ list: [] }, getList([1, 2, 3]))
        expect(state.list).has.length(3)
    });
});