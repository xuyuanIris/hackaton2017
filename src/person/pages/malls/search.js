import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { partial, constant } from 'lodash'
import search from '../components/search.pure';
import { onChange } from '../../reducer/mall/index'

const emhance = compose(
    connect(
        constant({}),
        partial(bindActionCreators, { onChange })
    ),
    withHandlers({
        onChange: props => e => props.onChange(e.target.value)
    })
)
export default emhance(search)