import * as React from 'react'
import Snackbar from 'material-ui/Snackbar';
import { compose, defaultProps } from 'recompose'

function commons({ children, open, message, onClose }) {
    return (<div>
        {children}
        <Snackbar
            open={open}
            message={message}
            autoHideDuration={2000}
            onRequestClose={onClose}
        />
    </div>)
}

export default compose(
    defaultProps({
        open: false,
        message: '',
    })
)(commons)