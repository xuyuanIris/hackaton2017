import React from 'react'
import { partial, property, map, includes } from 'lodash'
import { compose, lifecycle, withHandlers } from 'recompose'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import style from 'styled-components'
import Item from './item.customer'
import Top from './../../../../js/top'
import { getCustomerList, recommend, reset } from '../../../reducer/customer/list/index'

const raisedButton = {
    flex: 1
}
const add = {
    color: '#fff',
    padding: '0 10px'
}
const Body = style.div`
`
const list = (p) => {
    const { cutList, onClick, checks, location: { state: { companyName } } } = p
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
            {companyName}
    </div>
        <Body>
            {
                map(cutList, ({ id, mobile_tel: tel, remark, gender, name }) => (<Item
                    tel={tel}
                    id={id}
                    checked={includes(checks, id)}
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
            <RaisedButton label="推荐" primary onClick={onClick} style={raisedButton} />
        </div>
    </div>)
}

export default compose(
    connect(
        createSelector(
            [
                property('person.customer.list.list'),
                property('person.customer.list.checks')
            ],
            (cutList, checks) => ({
                cutList, checks
            })
        ),
        partial(bindActionCreators, { getCustomerList, recommend, reset })
    ),
    withHandlers({
        onClick: props => () => {
            const customerIds = props.checks
            const { params: { companyId } } = props.match
            if (customerIds.length !== 0) {
                props.recommend({
                    customer_ids: customerIds,
                    company_id: companyId
                })
            }
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.reset()
            this.props.getCustomerList()
        }
    })
)(list)