import React from 'react'
import { map, times } from 'lodash'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Item from './item.pure';

const emhance = compose(
    connect(
        createSelector(
            [],
            () => ({
                list: times(100, i => ({ name: `xx${i}`, id: i }))
            })
        )
    )
)
function List() {
    return (<div>
        <Item name="张俊" tel="18666297174" stage="待跟" tkname="戴敏" remark="本市有房，还款能力强，可以作为优质客户。" />
        <Item name="张俊" tel="18666297174" stage="待跟" tkname="戴敏" remark="本市有房，还款能力强，可以作为优质客户。" />
        <Item name="张俊" tel="18666297174" stage="待跟" tkname="戴敏" remark="本市有房，还款能力强，可以作为优质客户。" />
    </div>)
}
export default emhance(List)