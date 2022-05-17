import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//home模块的小仓库
const state = {
    categoryList: [], //起始值
    // 轮播图的数据
    getBannerList: [],
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, getbannerList) {
        state.getBannerList = getbannerList;
    },
    GETFOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};
const actions = {
    // 通过API里面的接口函数调用，像服务器发送请求获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.data.code === 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        commit("GETBANNERLIST", result.data);
    },
    // 获取floor的数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.data.code === 200) {
            commit("GETFOORLIST", result.data);
        }
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};