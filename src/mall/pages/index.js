import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import { nest } from 'recompose'
import MallContainer from './containers/mallContainer'
import Footer from './containers/footer'
import Body from './containers/body'
import orders from './orders/index'
import fadeIn from './../../js/fadeIn'
import me from './me/index'

export default () => (
    <MallContainer>
        <Body>
            <Switch>
                <Route path="/mall/orders" component={nest(fadeIn, orders)} />
                <Route path="/mall/me" component={nest(fadeIn, me)} />
                <Redirect to="/mall/orders" />
            </Switch>
        </Body>
        <Footer />
    </MallContainer>
)