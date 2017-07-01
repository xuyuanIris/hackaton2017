import axios from 'axios'
import qs from 'qs'

export default class ProxyAxios {
    constructor({ before, after }) {
        this.before = before;
        this.after = after;
    }
    get(...o) {
        this.before(...o)
        return axios.get(...o).then((res) => {
            this.after(null, ...o);
            return res;
        }, (res) => {
            this.after(true, ...o);
            return Promise.reject(res);
        })
    }
    post(url, params) {
        this.before(url)
        return axios.post(url,
            qs.stringify(params),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((res) => {
            this.after(url)
            return res
        }, (res) => {
            this.after(url)
            return Promise.reject(res)
        })
    }
}