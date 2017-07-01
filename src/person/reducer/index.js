import { proxyAxios } from './../../reducers/store'

export const doTest = () => () => {
    proxyAxios.get('/api')
}
export default function () {
    return 111
}