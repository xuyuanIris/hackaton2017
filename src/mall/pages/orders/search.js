import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { partial, constant } from 'lodash'
import search from './../../../person/pages/components/search.pure';

const emhance = compose(
    connect(
        constant({}),
        partial(bindActionCreators, { })
    ),
    withHandlers({
    })
)
export default emhance(search)