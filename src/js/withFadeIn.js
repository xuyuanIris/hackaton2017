import style, { keyframes } from 'styled-components'

const fade = keyframes`
    from { opacity: 0; }
    to { opacity: 1 }
`
export default function withFadeIn(beWrap) {
    return style(beWrap) `
        animation: ${fade} 0.3s ease-in  1 normal;
    `
}