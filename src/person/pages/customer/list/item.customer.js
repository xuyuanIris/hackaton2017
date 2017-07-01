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
const Label = style.div`
`
export default ({ tel, name }) => (<ItemWrap>
    <Checkbox
        label={
            <Label>
                <Name>
                    姓名：{name}
                </Name>
                <Tel>
                    电话：{tel}
                </Tel>
            </Label>
        }
    />
</ItemWrap>)