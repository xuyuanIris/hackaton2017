import React from 'react'
import { compose } from 'recompose'
import Top from './../../../js/top'
import Search from './search'
import Select from './select'
import ListItem from './ListItem'
import {List} from 'material-ui/List';
import Containers from '../containers/list'
import style from 'styled-components'

const SelectDiv = style.div `
    flex: 1;
    width: 25%;
`
const malls = () => (<div>
    <Top title="商城" />
    <Search />
    <Containers>
        <SelectDiv>
            <Select />
        </SelectDiv>
        <SelectDiv>
            <Select />
        </SelectDiv>
        <SelectDiv>
            <Select />
        </SelectDiv>
        <SelectDiv>
            <Select />
        </SelectDiv>
    </Containers>
    <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </List>
</div>)

export default compose(

)(malls)