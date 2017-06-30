import React from 'react'
import style from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

const ItemWrap = style.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 20px;
    line-height: 25px;
    font-size: 14px;    
`
const Tel = style.div`
    font-size: 12px;
    text-align: left;
`
const Name = style.div`
    text-align: left;
`
const raisedButton = {
    height: 36
}
export default () => (<ItemWrap>
    <div style={{
        flex: 1,
        textAlign: 'center'
    }}
    >
        <Name>
            姓名：xiaomin
        </Name>
        <Tel>
            电话：13377829475
        </Tel>
    </div>
    <RaisedButton label="推荐" primary={true} style={raisedButton} />
</ItemWrap>)