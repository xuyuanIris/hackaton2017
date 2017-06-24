import { compose, withProps, withState, lifecycle } from 'recompose'
import { property } from 'lodash'
import async from '../../js/async';

const emhance = compose(
    withState('componentContainer', 'setComponent', null),
    lifecycle({
        componentDidMount() {
            require.ensure([], require => {
                setTimeout(() => {
                    const Mall = require('./index').default
                    this.props.setComponent({ component: Mall })
                }, 500)
            }, 'Mall')
        }
    }),
    withProps(property('componentContainer'))
)
export default emhance(async)
