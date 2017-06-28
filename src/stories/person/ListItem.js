/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from 'styled-components'

import ListItem from './../../person/pages/malls/ListItem'

const Div = style.div`
    width: 375px;
`
storiesOf('person', module).add('list', () => (<MuiThemeProvider>
    <Div>
        <ListItem selectedIndex={0} replace={action} />
    </Div>
</MuiThemeProvider>))