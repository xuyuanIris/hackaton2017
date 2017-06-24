import { branch, renderComponent, componentFromProp, compose } from 'recompose'
import { property } from 'lodash'
// import loadingComponent from './loadingComponent'
import materialLoading from './materialLoading'

const detail = componentFromProp('component')
const emhance = compose(
    branch(property('component'), renderComponent(detail))
)
const Async = emhance(materialLoading)
export default Async;