/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './../../mall/pages/components/footer.pure'

storiesOf('mall', module).add('footer', () => (<MuiThemeProvider>
    <Footer selectedIndex={0} replace={action} />
</MuiThemeProvider>))