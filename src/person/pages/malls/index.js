import React from 'react'
import { compose, lifecycle } from 'recompose'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { partial } from 'lodash'
import { List } from 'material-ui/List';
import Top from './../../../js/top'
import Search from './search'
import ListItem from './ListItem'
import { doRequest } from './../../../reducers/request'

const malls = () => (<div>
    <Top title="商城" />
    <Search />
    <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </List>
</div>)

export default compose(
    connect(
        createSelector(
            [],
            () => ({

            })
        ),
        partial(bindActionCreators, {
            doRequest
        })
    ),
    lifecycle({
        componentDidMount() {
            this.props.doRequest(1, 2, 3)
        }
    })
)(malls)