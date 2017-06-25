import style, { keyframes } from 'styled-components'

const fade = keyframes`
    from { opacity: 0; }
    to { opacity: 1 }
`

const fadeIn = style.div`
     animation: ${fade} 0.3s ease-in  1 normal;
`
export default fadeIn