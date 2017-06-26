import TextField from 'material-ui/TextField';
import { compose, withProps } from 'recompose'

const emhance = compose(
    withProps({
        fullWidth: true,
        hintText: '输入关键字以查询信息'
    })
)
export default emhance(TextField)