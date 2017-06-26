import { withRouter } from 'react-router'
import { compose, withHandlers, withProps } from 'recompose'
import Footer from './../components/footer.pure'

const activeTable = {
    '/mall/orders': 0,
    '/mall/me': 1
}
const emhance = compose(
    withRouter,
    withHandlers({
        replace: props => path => () => props.history.replace(path)
    }),
    withProps(props => ({ selectedIndex: activeTable[props.location.pathname] }))
)

export default emhance(Footer)