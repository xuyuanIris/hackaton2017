/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Input from '../../person/pages/components/input'

storiesOf('commons', module)
    .add('input', () => (<MuiThemeProvider>
        <Input />
    </MuiThemeProvider>))