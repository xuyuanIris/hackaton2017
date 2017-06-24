import React from 'react'
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Alert from 'material-ui/svg-icons/alert/add-alert';
import ActionHome from 'material-ui/svg-icons/action/home';
import style from 'styled-components';
import { blue500 } from 'material-ui/styles/colors';

const alert = <Alert />
const home = <ActionHome color={blue500} />
const BottomPaper = style(Paper) `
    position: absolute;
    bottom: 0;
    background-color: red;
`

export default function Footer() {
    return (<BottomPaper zDepth={1}>
        <BottomNavigation>
            <BottomNavigationItem label="1" icon={home} />
            <BottomNavigationItem label="2" icon={alert} />
            <BottomNavigationItem label="3" icon={alert} />
        </BottomNavigation>
    </BottomPaper>)
}
