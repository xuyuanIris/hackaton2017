import React from 'react'
import { times } from 'lodash'
import Item from './item.customer'
import Top from './../../../../js/top'

const list = () => (<div>
    <Top title="客户列表" />
    {times(10, (key) => <Item key={key} />)}
</div>)
export default list;