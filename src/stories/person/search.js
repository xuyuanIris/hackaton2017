/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Search from './../../person/pages/malls/search'

storiesOf('person', module).add('search', () => (<MuiThemeProvider>
    <Search />
</MuiThemeProvider>))