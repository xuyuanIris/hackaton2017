/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MaterialLoading from './../../js/materialLoading'
import MyLoading from './../../js/loadingComponent'

storiesOf('commons', module)
    .add('MaterialLoading', () => (<MuiThemeProvider>
        <MaterialLoading />
    </MuiThemeProvider>))
    .add('MyLoading', () => (<MuiThemeProvider>
        <MyLoading />
    </MuiThemeProvider>))