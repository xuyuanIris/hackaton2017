/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Top from './../../js/top'

storiesOf('mall', module).add('top', () => (<MuiThemeProvider>
    <Top title="头部" />
</MuiThemeProvider>))