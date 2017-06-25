import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import fadeIn from './../../js/fadeIn'
import malls from './malls/index'

export default () => (<Switch>
    <Route path="/person/malls" component={nest(fadeIn, malls)} />
    <Redirect to="/person/malls" />
</Switch>)