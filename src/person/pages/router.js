import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import fadeIn from './../../js/fadeIn'
import malls from './malls/index'
import container from './container'

export default () => (<Switch>
    <Route path="/person/malls" component={nest(container, fadeIn, malls)} />
    <Redirect to="/person/malls" />
</Switch>)