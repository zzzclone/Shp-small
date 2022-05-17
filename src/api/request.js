//对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
//1、利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    // 配置对象
    baseURL: "/api",
    timeout: 5000,
});
// 请求拦截器
requests.interceptors.request.use(config => {
    // config：配置对象，对象里面有个属性很重要，headers请求头
    nprogress.start();
    return config;
});
// 响应拦截器
requests.interceptors.response.use(res => {
        nprogress.done();
        // 成功的回调函数
        return res.data;
    }),
    error => {
        return Promise.reject(new Error("faile"));
    };
export default axios;