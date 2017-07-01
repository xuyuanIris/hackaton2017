import { expect } from 'chai'
import reducer, { getList, onChange } from './index'

describe('request', () => {
    it('doRequest', () => {
        const state = reducer({ list: [] }, getList([1, 2, 3]))
        expect(state.list).has.length(3)
    });
});

describe('searchKey', () => {
    it('onChange', () => {
        const state = reducer({ searchKey: '' }, onChange('onChange'))
        expect(state.searchKey).has.eq('onChange')
    });
});