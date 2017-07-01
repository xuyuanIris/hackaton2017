import React from 'react'
import style from 'styled-components'
import Checkbox from 'material-ui/Checkbox';
import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { partial } from 'lodash'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { toggle } from '../../../reducer/customer/list/index'

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
const item = ({ tel, name, onClick, checked }) => (<ItemWrap onClick={onClick}>
    <Checkbox
        checked={checked}
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
export default compose(
    connect(
        createSelector(
            [],
            () => {
                return {}
            }
        ),
        partial(bindActionCreators, {
            toggle
        })
    ),
    withHandlers({
        onClick: props => () => {
            const { id } = props
            props.toggle({ id })
        }
    })
)(item)