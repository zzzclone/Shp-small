// 引入接口
import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    // 仓库初始化状态，取决于实际的数据格式
    searchList: {},
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};
const actions = {
    // 获取search模块数据
    async getSearchList({ commit }, params = {}) {
        // reqGetSearchInfo函数调用的时候至少传入一个参数
        // params形参是用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params); //等待成功的结果
        if (result.data.code === 200) {
            commit("GETSEARCHLIST", result.data);
        }
    },
};
// getters计算属性：为了简化数据,可以把将来在组件中需要使用到的数据简化一下，以后组件在获取数据的时候就方便了
const getters = {
    // 这个形参state是当前仓库的形参不是大仓库的state
    goodsList(state) {
        // 如果这里网络不给力，goodsList返回undefined，所以这里设置返回一个数组
        return state.searchList.data.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.data.trademarkList;
    },
    attrsList(state) {
        return state.searchList.data.attrsList;
    },
};
export default {
    state,
    mutations,
    actions,
    getters,
};