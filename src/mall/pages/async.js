import { compose, withProps, withState, lifecycle } from 'recompose'
import { property, once } from 'lodash'
import async from '../../js/async';
import { injectReducerWithStore } from '../../reducers/store'

const dynamicLoadMall = once((setComponent) => {
    require.ensure([], require => {
        setTimeout(() => {
            const Mall = require('./index').default
            const MallReducer = require('../reducer/index').default
            injectReducerWithStore({ mall: MallReducer })
            setComponent({ component: Mall })
        }, 500)
    }, 'Mall')
})
const emhance = compose(
    withState('componentContainer', 'setComponent', null),
    lifecycle({
        componentDidMount() {
            dynamicLoadMall(this.props.setComponent)
        }
    }),
    withProps(property('componentContainer'))
)
export default emhance(async)
