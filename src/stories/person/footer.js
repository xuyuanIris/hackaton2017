/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { Md, Mobile } from 'storybook-utils'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './../../person/pages/components/footer.pure'

const footmd = require('./footer.md')

storiesOf('person', module).add('footer', () => (<MuiThemeProvider>
    <div>
        <Md str={footmd} />
        <Mobile>
            <Footer selectedIndex={0} replace={action} />
        </Mobile>
    </div>
</MuiThemeProvider>))