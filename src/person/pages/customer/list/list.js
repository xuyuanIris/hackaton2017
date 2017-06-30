import React from 'react'
import { times } from 'lodash'
import Item from './item.customer'
import Top from './../../../../js/top'
import ContentAdd from 'material-ui/svg-icons/content/add';

const add = {
    color: '#fff',
    height: 52,
    padding: '0 10px'
}
const list = () => (<div>
    <Top
    title="客户列表"
    iconElementRight={
        <ContentAdd style={add} />
        }
    />
    <div style={{
        padding: '10px 15px',
        lineHeight: '25px',
        borderBottom: '1px solid #ccc'

    }}
    >
        深圳市铂丽装饰设计工程有限公司
    </div>
    {times(10, (key) => <Item key={key} />)}
</div>)
export default list;