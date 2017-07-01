import React from 'react'
import Top from './../../../js/top'
import Body from './body'
import List from './list'

const orders = ({ className }) => (<div className={className}>
    <Top title="订单" />
    <Body style={{ backgroundColor: '#f2f4f6' }}>
        <List />
    </Body>
</div>)
export default orders;