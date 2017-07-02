import React from 'react'
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Setting from 'material-ui/svg-icons/action/settings-applications';
import ActionHome from 'material-ui/svg-icons/action/home';
import style from 'styled-components';
import { compose, defaultProps, onlyUpdateForKeys } from 'recompose'

const me = <Setting />
const home = <ActionHome />
const BottomPaper = style(Paper) `
    position: absolute;
    bottom: 0;
    width: 100%;
`
const Footer = ({ selectedIndex, replace }) => (<BottomPaper zDepth={1}>
    <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem label="掘金大厅" icon={home} onTouchTap={replace('/person/malls')} />
        <BottomNavigationItem label="客户" icon={home} />
        <BottomNavigationItem label="我" icon={me} />
    </BottomNavigation>
</BottomPaper>)

export default compose(
    onlyUpdateForKeys(['selectedIndex']),
    defaultProps({ selectedIndex: 0, replace: () => () => { } })
)(Footer)