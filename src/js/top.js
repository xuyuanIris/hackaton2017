import AppBar from 'material-ui/AppBar';
import { withProps } from 'recompose'

export default withProps({
    titleStyle: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        fontSize: 20
    },
    showMenuIconButton: false
})(AppBar)
