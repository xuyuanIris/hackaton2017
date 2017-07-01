import React from 'react'
import style from 'styled-components'
import Checkbox from 'material-ui/Checkbox';

const ItemWrap = style.div`
    display: flex;
    align-items: center;
    
    border-bottom: 1px solid rgba(238, 238, 238, 0.8);
    padding: 10px 20px;
    line-height: 25px;
    font-size: 14px;
    *zoom: 1;
    &:after {
        clear: both;
        height: 0;
        display: block;
        visibility: hidden;
        content: "";
    }
`
const Tel = style.div`
    font-size: 12px;
    text-align: left;
`
const Name = style.div`
    text-align: left;
`
const checkbox = {
}
const Label = style.div`
`
export default () => (<ItemWrap>
    <Checkbox
        style={checkbox}
        label={
            <Label>
                <Name>
                    姓名：xiaomin
                </Name>
                <Tel>
                    电话：13377829475
                </Tel>
            </Label>
        }
    />
</ItemWrap>)