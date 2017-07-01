import React from 'react'
import { partial, property, map } from 'lodash'
import { compose, lifecycle } from 'recompose'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import style from 'styled-components'
import Item from './item.customer'
import Top from './../../../../js/top'
import { getCustomerList } from '../../../reducer/customer/list/index'

const raisedButton = {
    flex: 1
}
const add = {
    color: '#fff',
    padding: '0 10px'
}
const Body = style.div`
`
const list = ({ cutList }) => {
    return (<div>
        <Top
            title="客户列表"
            iconElementRight={
                <ContentAdd style={add} />
            }
        />
        <div style={{
            padding: '10px 15px',
            lineHeight: '25px',
            borderBottom: '1px solid rgba(238, 238, 238, 0.8)'

        }}
        >
            深圳市铂丽装饰设计工程有限公司
    </div>
        <Body>
            {
                map(cutList, ({ id, mobile_tel: tel, remark, gender, name }) => (<Item
                    tel={tel}
                    id={id}
                    key={id}
                    name={name}
                    remark={remark}
                    gender={gender}
                />))
            }
        </Body>
        <div style={{
            display: 'flex',
            textAlign: 'center'
        }}
        >
            <RaisedButton label="推荐" primary style={raisedButton} />
        </div>
    </div>)
}

export default compose(
    connect(
        createSelector(
            [property('person.customer.list.list')],
            (cutList) => ({
                cutList
            })
        ),
        partial(bindActionCreators, { getCustomerList })
    ),
    lifecycle({
        componentDidMount() {
            this.props.getCustomerList()
        }
    })
)(list)