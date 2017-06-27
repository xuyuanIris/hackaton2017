import style from 'styled-components'

const List = style.div`
    & > *:not(:first-child){
        margin-top: 20px;
    }
`
export default List