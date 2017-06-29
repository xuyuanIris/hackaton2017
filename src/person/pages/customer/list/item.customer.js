import React from 'react'
import style from 'styled-components'

const ItemWrap = style.div`
    margin: 10px;
    border: 1px solid black;
    padding: 10px;
`
const Name = style.span`
    margin-right: 10px
`
const Tel = style.span`
`
export default () => (<ItemWrap>
    <Name>
        xiaomin
    </Name>
    <Tel>
        13377829475
    </Tel>
</ItemWrap>)