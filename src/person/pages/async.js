import { compose, withProps, withState, lifecycle } from 'recompose'
import { property, once } from 'lodash'
import async from '../../js/async';
import { injectReducerWithStore } from '../../reducers/store'

const dynamicLoadperson = once((setComponent) => {
    require.ensure([], require => {
        const person = require('./router').default
        const personReducer = require('../reducer/index').default
        injectReducerWithStore({ person: personReducer })
        setComponent({ component: person })
    }, 'Person')
})
const emhance = compose(
    withState('componentContainer', 'setComponent', null),
    lifecycle({
        componentDidMount() {
            dynamicLoadperson(this.props.setComponent)
        }
    }),
    withProps(property('componentContainer'))
)
export default emhance(async)
