import input from '../components/input';
import { compose, withProps } from 'recompose';

export default compose(
    withProps({
        fullWidth: true,
        hintText: "Hint Text"
    })
)(input)