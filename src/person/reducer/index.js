import { proxyAxios } from './../../reducers/store'

export const doTest = () => () => {
    proxyAxios.get('/api').then(console.log)
}
export default function () {
    return 111
}