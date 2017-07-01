import React from 'react'
import { compose, lifecycle, withHandlers } from 'recompose'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { chain, filter, partial, property, map, includes } from 'lodash'
import { List } from 'material-ui/List';
import Top from './../../../js/top'
import Search from './search'
import ListItem from './ListItem'
import { getCompanyList } from '../../reducer/mall/index'

export const filterBySearchKey = (list, searchKey) => {
    return filter(
        list,
        item => chain(item)
            .pick('name', 'remark', 'tel')
            .some(value => {
                return includes(value, searchKey)
            }).value()
    )
}
const malls = ({ list, push }) => (<div>
    <Top title="商城" />
    <Search />
    <List>
        {
            map(list, ({ id, avatar, name, remark, tel }) => (<ListItem
                key={id}
                src={avatar}
                name={name}
                remark={remark}
                onClick={push(`/person/customer/list/${id}`)}
                tel={tel}
            />))
        }
    </List>
</div>)

export default compose(
    connect(
        createSelector(
            [
                property('person.malls.list'),
                property('person.malls.searchKey')
            ],
            (list, searchKey) => {
                return {
                    list: filterBySearchKey(list, searchKey)
                }
            }
        ),
        partial(bindActionCreators, {
            getCompanyList
        })
    ),
    withHandlers({
        push: props => (src) => () => props.history.push(src)
    }),
    lifecycle({
        componentDidMount() {
            this.props.getCompanyList()
        }
    })
)(malls)