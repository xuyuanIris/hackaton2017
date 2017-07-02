import React from 'react'
import style from 'styled-components'

const ItemWrap = style.div`
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 10px;
    background-color: #fff;
`
const CstInfo = style.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    & > span{
        margin-right: 10px;
    }
`
const Remark = style.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
    padding: 5px 15px;
`
const Man = style.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url('/img/man-icon.jpg') no-repeat;
    background-size: 100% 100%;    
`
const Label = style.span`
    display: inline-block;
    height: 16px;
    line-height: 16px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #3ccbdd;
    padding: 0 3px;
    border-radius: 2px;
`
export default ({ name }) => (<ItemWrap>
    <div style={{ padding: '15px', borderBottom: '1px solid rgba(238, 238, 238, 0.5)', }}>
        <CstInfo>
            <Man />
            <span>{name}</span>
            <span>13565656565</span>
            <Label>待跟</Label>
        </CstInfo>
        <div>
            <span style={{ color: '#666' }} >推客：</span>
            <span style={{ color: '#2ca6e0' }} >戴敏</span>
        </div>
    </div>
    <Remark>
        客户刚买房，计划7月份就装修，喜欢中式风格，意向价位10w内。
    </Remark>
</ItemWrap>)