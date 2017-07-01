import React from 'react'
import { compose } from 'recompose'
import { List } from 'material-ui/List';
import Top from './../../../js/top'
import Search from './search'
import ListItem from './ListItem'

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

)(malls)