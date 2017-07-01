import axios from 'axios'

export default class ProxyAxios {
    constructor({ before, after }) {
        this.before = before;
        this.after = after;
    }
    get(...o) {
        this.before(...o)
        return axios.get(...o).then((res) => {
            this.after(...o);
            return res;
        }, (res) => {
            this.after(true, ...o);
            return Promise.reject(res);
        })
    }
}