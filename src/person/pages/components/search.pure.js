import TextField from 'material-ui/TextField';
import { compose, withProps } from 'recompose'

const emhance = compose(
    withProps({
        fullWidth: true,
        hintText: 'Hint Text'
    })
)
export default emhance(TextField)