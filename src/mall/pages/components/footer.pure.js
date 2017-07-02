import React from 'react'
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import ActionHome from 'material-ui/svg-icons/action/home';
import Cst from 'material-ui/svg-icons/social/people';
import Found from 'material-ui/svg-icons/action/find-in-page';
import style from 'styled-components';
import { compose, defaultProps, onlyUpdateForKeys } from 'recompose'

const home = <ActionHome />
const cst1 = <Cst />
const found = <Found />
const BottomPaper = style(Paper) `
    position: absolute;
    bottom: 0;
    width: 100%;
`
const Footer = ({ selectedIndex, replace }) => (<BottomPaper zDepth={1}>
    <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem label="客户" icon={cst1} onTouchTap={replace('/mall/orders')} />
        <BottomNavigationItem label="推客" icon={home} />
        <BottomNavigationItem label="发现" icon={found} onTouchTap={replace('/mall/me')} />
    </BottomNavigation>
</BottomPaper>)

export default compose(
    onlyUpdateForKeys(['selectedIndex']),
    defaultProps({ selectedIndex: 0, replace: () => () => { } })
)(Footer)