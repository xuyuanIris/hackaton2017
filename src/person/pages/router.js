import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import fadeIn from './../../js/fadeIn'
import malls from './malls/index'
import container from './container'
import me from './me'
import New from './customer/new/new'
import List from './customer/list/list'

export default () => (<Switch>
    <Route path="/person/malls" component={nest(container, fadeIn, malls)} />
    <Route path="/person/me" component={nest(container, fadeIn, me)} />
    <Route path="/person/customer/list/:companyId" component={nest(fadeIn, List)} />
    <Route path="/person/customer/new" component={nest(container, fadeIn, New)} />
    <Redirect to="/person/malls" />
</Switch>)