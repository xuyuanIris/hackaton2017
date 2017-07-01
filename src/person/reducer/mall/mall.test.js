import { expect } from 'chai'
import reducer, { getList, onChange } from './index'
import { filterBySearchKey } from '../../pages/malls/index'

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

describe('filter', () => {
    it('filter by searchKey', () => {
        const list = [{ avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720170701164133.png', id: 31, name: '深圳市自然元素装饰设计工程有限公司', remark: '深圳市宝安华美居B区535（宝安体育馆旁）', tel: '0755-399782434' }, { avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720170701164017.png', id: 30, name: '深圳市城果装饰设计有限公司', remark: '深圳市宝安区宝安82区新湖路华丰科技园ABCD座A区七楼726号', tel: '0755-099682374' }, { avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720170701163828.png', id: 29, name: '深圳市鹏森装饰设计工程有限公司', remark: '深圳市南山区南山大道1092亿利达大厦3栋B3-103号', tel: '0755-09982473' }, { avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720170701163735.png', id: 28, name: '深圳龙凤阁装饰工程有限公司', remark: '龙城街道吉祥地铁站湖广通创业大厦718', tel: '020-99982473' }, { avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/headphoto_573608.jpg', id: 27, name: '邢湾装修', remark: '邢湾装修，美的享受', tel: '020-99992473' }, { avatar: 'http://77g0dp.com1.z0.glb.clouddn.com/headphoto_470907.jpg', id: 26, name: '国风装饰有限公司', remark: '国风装饰，中国风', tel: '010-99992433' }, { avatar: '/img/ok-128.jpg', id: 1, name: '国际装修', remark: '最好的装修公司', tel: '100-39-0332232' }]
        const result = filterBySearchKey(list, '深圳市自然元素装饰设计工程有限公司')
        expect(result).has.length(1)
        expect(result[0]).to.has.all.keys('name', 'id', 'remark', 'tel', 'avatar')
    });
});