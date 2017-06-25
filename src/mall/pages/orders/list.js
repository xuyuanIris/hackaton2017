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
function List({ list }) {
    return (<div>
        {map(list, ({ id, name }) => <Item key={id} name={name} />)}
    </div>)
}
export default emhance(List)