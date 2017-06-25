import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import orders from './orders/index'
import detailOrder from './detailOrder/index'
import fadeIn from './../../js/fadeIn'
import me from './me/index'
import container from './container'

export default () => (<Switch>
    <Route path="/mall/orders" component={nest(container, fadeIn, orders)} />
    <Route path="/mall/me" component={nest(container, fadeIn, me)} />
    <Route path="/mall/order/:id" component={nest(fadeIn, detailOrder)} />
    <Redirect to="/mall/orders" />
</Switch>)