import React from 'react';
import MallContainer from './containers/mallContainer'
import Footer from './containers/footer'
import Body from './containers/body'

export default ({ children }) => (<MallContainer>
    <Body>
        {children}
    </Body>
    <Footer />
</MallContainer>)