import Vue from "vue";
import App from "./App.vue";
// 定义全局组件，在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
// 全局组件的注册 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入路由
import router from "@/router";
// 引入vuex仓库
import store from "./store";
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper样式 css不需要对外暴露
import "swiper/css/swiper.css";

new Vue({
    render: h => h(App),
    router,
    // 注册仓库：这时组件实例上会多一个$store属性
    store,
}).$mount("#app");