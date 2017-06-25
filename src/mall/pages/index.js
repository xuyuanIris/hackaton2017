import React from 'react';
import { Route, Redirect, Switch } from 'react-router'
import MallContainer from './containers/mallContainer'
import Footer from './containers/footer'
import Body from './containers/body'
import orders from './orders/index'
import me from './me/index'

export default () => (
    <MallContainer>
        <Body>
            <Switch>
                <Route path="/mall/orders" component={orders} />
                <Route path="/mall/me" component={me} />
                <Redirect to="/mall/orders" />
            </Switch>
        </Body>
        <Footer />
    </MallContainer>
)