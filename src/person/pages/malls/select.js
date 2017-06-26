import select from '../components/select';
import { compose, withProps } from 'recompose';

export default compose(
    withProps({
        autoWidth: true,
        hintText: "Hint Text"
    })
)(select)