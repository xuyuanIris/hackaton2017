import React from 'react'
import { partial, property, map } from 'lodash'
import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import Item from './item.pure';
import { getCCList, reset } from '../../reducer/orders/index'

const emhance = compose(
    connect(
        createSelector(
            [property('mall.orders.list')],
            (list) => ({
                list
            })
        ),
        partial(bindActionCreators, {
            getCCList, reset
        })
    ),
    withRouter,
    lifecycle({
        componentDidMount() {
            this.props.reset()
            const companyId = this.props.match.params.companyId;
            this.props.getCCList(companyId)
        }
    })
)
function List({ list }) {
    console.log(list)

    return (<div>
        {
            map(list, ({ id, mobile_tel: tel, name, remark }) => (<Item
                key={id}
                name={name}
                tel={tel}
                stage="待跟"
                tkname="戴敏"
                remark={remark}
            />))
        }
        <Item name="彭圣熙" tel="1361313001" stage="待跟" tkname="戴敏" remark="企业主，经营一家便利店，流水好几万。" />
        <Item name="云杨焦" tel="13843894855" stage="已跟" tkname="戴敏" remark="经常购买3C产品，一直借钱度日，可以进行开发一下" />
        <Item name="翁畅" tel="18534438891" stage="已跟" tkname="戴敏" remark="稳定工作，有社保，有公积金" />
        <Item name="郜政宇" tel="18656727727" stage="未跟" tkname="龚容" remark="牛B客户，实力杠杠的。" />
        <Item name="俞诗丹" tel="18913847583" stage="已跟" tkname="龚容" remark="资产雄厚，不需要贷款" />
        <Item name="惠凌寒" tel="18965367721" stage="已跟" tkname="龚容" remark="企业高管。有辆奔驰。最近想换玛莎拉蒂。" />
        <Item name="郜笑天" tel="18963367721" stage="已跟" tkname="龚容" remark="准备装修，申请一笔装修贷。" />
    </div>)
}
export default emhance(List)