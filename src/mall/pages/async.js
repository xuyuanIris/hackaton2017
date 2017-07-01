import { compose, withProps, withState, lifecycle } from 'recompose'
import { property, once } from 'lodash'
import async from '../../js/async';
import { injectReducerWithStore } from '../../reducers/store'

const dynamicLoadMall = once((setComponent) => {
    require.ensure([], require => {
        const Mall = require('./router').default
        const MallReducer = require('../reducer/index').default
        injectReducerWithStore({ mall: MallReducer })
        setComponent({ component: Mall })
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
