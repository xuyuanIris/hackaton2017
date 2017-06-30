import React from 'react'
import Top from './../../../js/top'
import Body from './body'
import List from './list'

const orders = ({ className }) => (<div className={className}>
    <Top title="订单" />
    <Body>
        <List />
    </Body>
</div>)
export default orders;