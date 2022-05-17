// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
// 配置路由
const routes = [
    // redirect重定向：项目跑起来的时候，方位定位到‘/xx’
    {
        path: "",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
        meta: {
            show: true,
        },
    },
    {
        path: "/search/:keyname?",
        component: Search,
        meta: {
            show: true,
        },
        name: "search",
    },
    {
        path: "/login",
        component: Login,
        meta: {
            show: false,
        },
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false },
    },
];

// 先把VueRuter 原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
// 第一个参数location：告诉原来的push方法跳转到哪里
// 第二个参数：成功的回调
// 第三个参数：失败的回调
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};

export default new VueRouter({
    routes,
});