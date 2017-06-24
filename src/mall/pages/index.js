import React from 'react';
import { Route } from 'react-router'
import MallContainer from './containers/mallContainer'
import Footer from './containers/footer'
import orders from './orders/index'
import me from './me/index'

export default () => (
    <MallContainer>
        <Route path="/mall/orders" component={orders} />
        <Route path="/mall/me" component={me} />
        <Footer />
    </MallContainer>
)