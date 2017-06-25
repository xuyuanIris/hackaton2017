import AppBar from 'material-ui/AppBar';
import { withProps } from 'recompose'

export default withProps({
    titleStyle: {
        textAlign: 'center',
    },
    showMenuIconButton: false
})(AppBar)
