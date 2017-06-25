import React from 'react';
import PersonContainer from './containers/personContainer'
import Footer from './containers/footer'
import Body from './containers/body'

export default ({ children }) => (<PersonContainer>
    <Body>
        {children}
    </Body>
    <Footer />
</PersonContainer>)