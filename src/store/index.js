//vuex属于vue中的一个插件，要使用需要引入下vue
import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);
// 引入vuex小仓库
import home from "./home";
import search from "./search";
//对外暴露Store类的一个实例，Store方法是一个构造函数可以初始化vuex
export default new Vuex.Store({
    // 实现vux模块式开发存储数据 在modules中进行注册
    modules: {
        home,
        search,
    },
});