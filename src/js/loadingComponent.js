import React from 'react'
import style, { keyframes } from 'styled-components'
import LdSvg from './loading.svg'
import { CenterPaper } from './materialLoading'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const Loading = style.img.attrs({
    src: LdSvg,
    alt: 'logo'
}) `
     animation: ${spin} infinite 0.6s linear;
`
export default () => (<CenterPaper zDepth={0}>
    <Loading />
</CenterPaper>)