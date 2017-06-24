import React from 'react'
import Top from '../components/top'
import Body from './body'
import List from './list'

const orders = () => (<div>
    <Top title="订单" />
    <Body>
        <List />
    </Body>
</div>)
export default orders;