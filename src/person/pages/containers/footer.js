import React from 'react'
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Setting from 'material-ui/svg-icons/action/settings-applications';
import ActionHome from 'material-ui/svg-icons/action/home';
import style from 'styled-components';
import { withRouter } from 'react-router'
import { compose, withHandlers } from 'recompose'

const me = <Setting />
const home = <ActionHome />
const BottomPaper = style(Paper) `
    position: absolute;
    bottom: 0;
    width: 100%;
`
const emhance = compose(
    withRouter,
    withHandlers({
        replace: props => props.history.replace
    })
)
const activeTable = {
    '/person/malls': 0,
    '/person/me': 1
}
const Footer = ({ replace, location: { pathname } }) => (<BottomPaper zDepth={1}>
    <BottomNavigation selectedIndex={activeTable[pathname]}>
        <BottomNavigationItem label="商城大厅" icon={home} onTouchTap={() => replace('/person/malls')} />
        <BottomNavigationItem label="我" icon={me} onTouchTap={() => replace('/person/me')} />
    </BottomNavigation>
</BottomPaper>)

export default emhance(Footer)