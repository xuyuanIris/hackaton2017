import React from 'react'
import style from 'styled-components'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

export const CenterPaper = style(Paper) `
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px 70px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
`
export default () => (<CenterPaper zDepth={1}>
    <CircularProgress />
</CenterPaper>)