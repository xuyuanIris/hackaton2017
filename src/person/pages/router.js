import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import fadeIn from './../../js/fadeIn'
import malls from './malls/index'
import container from './container'
import me from './me'

export default () => (<Switch>
    <Route path="/person/malls" component={nest(container, fadeIn, malls)} />
    <Route path="/person/me" component={nest(container, fadeIn, me)} />
    <Redirect to="/person/malls" />
</Switch>)