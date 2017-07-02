import { compose, withHandlers, withProps } from 'recompose'
import TextField from 'material-ui/TextField';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { partial, constant } from 'lodash'

const emhance = compose(
    connect(
        constant({}),
        partial(bindActionCreators, {})
    ),
    withHandlers({
    }),
    withProps({
        fullWidth: true,
        hintText: '输入电话号码或姓名进行查询'
    })
)
export default emhance(TextField)