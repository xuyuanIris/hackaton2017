import React from 'react'
import style from 'styled-components'

const ItemWrap = style.div`
    margin: 50px 0;
    padding: 0 10px;
`
export default ({ name }) => (<ItemWrap>
    {name}
</ItemWrap>)