import React from 'react'
import { compose, lifecycle } from 'recompose'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { partial, property, map } from 'lodash'
import { List } from 'material-ui/List';
import Top from './../../../js/top'
import Search from './search'
import ListItem from './ListItem'
import { getCompanyList } from '../../reducer/mall/index'

const malls = ({ list }) => (<div>
    <Top title="商城" />
    <Search />
    <List>
        {
            map(list, ({ id, avatar, name, remark, tel }) => (<ListItem
                key={id}
                src={avatar}
                name={name}
                remark={remark}
                tel={tel}
            />))
        }
    </List>
</div>)

export default compose(
    connect(
        createSelector(
            [
                property('person.malls.list')
            ],
            (list) => ({
                list
            })
        ),
        partial(bindActionCreators, {
            getCompanyList
        })
    ),
    lifecycle({
        componentDidMount() {
            this.props.getCompanyList()
        }
    })
)(malls)