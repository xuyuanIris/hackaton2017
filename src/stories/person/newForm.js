/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from 'styled-components'

import NewForm from './../../person/pages/customer/new/newForm'

const Div = style.div`
    width: 375px;
`
storiesOf('person', module).add('list', () => (<MuiThemeProvider>
    <Div>
        <NewForm />
    </Div>
</MuiThemeProvider>))