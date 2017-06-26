import { compose, withHandlers } from 'recompose'
import search from '../components/search.pure';

const emhance = compose(
    withHandlers({
        onChange: () => e => {
            console.log(e.target.value)
        }
    })
)
export default emhance(search)