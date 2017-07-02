import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import orders from './orders/index'
import detailOrder from './detailOrder/index'
import fadeIn from './../../js/fadeIn'
import withFadeIn from './../../js/withFadeIn'
import me from './me/index'
import container from './container'

export default () => (<Switch>
    <Route path="/mall/orders/:companyId" component={nest(container, withFadeIn(orders))} />
    <Route path="/mall/me" component={nest(container, withFadeIn(me))} />
    <Route path="/mall/order/:id" component={nest(fadeIn, detailOrder)} />
    <Redirect to="/mall/orders/30" />
</Switch>)