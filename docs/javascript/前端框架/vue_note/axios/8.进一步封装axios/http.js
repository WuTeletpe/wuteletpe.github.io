import axios from 'axios'
import service from './contactApi'
// service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL: 'http://localhost:9000/api',
    timeout: 1000,
})

const Http = {}
for(let key in service) {
    let api = service[key]
    // async 避免了回调地狱
    // axios.get().then(res=>{
    //     axios.get().then(res=>{
    //         ...
    //     })
    // })
    // Http[key] = async function() {
    //     let res = await axios.get('url')
    //     let res2 = await axios.get('url')
    // }
    Http[key] = async function(
        params,
        isFormData=false,
        config={}
    ) {
        let url = api.url
        let newParams = {}
        if(params && isFormData) {
            newParams = new FormData()
            for(let i in params) {
                newParams.append(i, params[i])
            }
        } else {
            newParams = params
        }
        let response = {}
        if(api.method === 'put' ||
            api.method === 'post' ||
            api.method === 'patch'
        ) {
            try {
                response = await instance[api.method](api.url, newParams, config)
            } catch (err) {
                response = err
            }
        } else if(api.method === 'delete' || api.method === 'get'){
            config.params = newParams
            try {
                response = await instance[api.method](api.url, config)
            } catch (err) {
                response = err
            }
        }
        return response
    }
}
instance.interceptors.request.use(config=>{
    // 发起请求前做些什么
    Toast.loading({
        mask: false,
        duration: 0,
        forbidClick: true,
        message: '加载中...'
    })
    return config
},err=>{
    // 请求错误
    Toast.clear()
    Toast('请求错误，请稍后重试')
})
instance.interceptors.response.use(config=>{
    // 请求成功
    Toast.clear()
    return res.data
},()=>{
    Toast.clear()
    Toast('请求错误，请稍后重试')
})

export default Http
