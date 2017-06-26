import React from 'react'
import { compose } from 'recompose'
import Top from './../../../js/top'
import Search from './search'
import Card from './card'
import List from './../containers/list'

const malls = () => (<div>
    <Top title="商城" />
    <Search />
    <List>
        <Card />
        <Card />
        <Card />
        <Card />
    </List>
</div>)

export default compose(

)(malls)