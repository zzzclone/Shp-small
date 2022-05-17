//这个模块：对所有的API接口进行统一的管理
import requests from "./request";
import mockRuests from "./mockRequest";
//三级联动的接口 /api/product/getBaseCategoryList get 无参数
//向外暴露一个函数，每次调用这个函数相当于发送一次请求
export const reqCategoryList = () =>
    // 发请求 axios发送请求返回的是promise对象
    requests({
        url: "/api/product/getBaseCategoryList",
        method: "get",
    });
// 获取banner轮播图的接口
export const reqGetBannerList = () => mockRuests.get("/mock/banner");
// 获取floor数据接口
export const reqFloorList = () => mockRuests.get("/mock/floor");

//获取search模块的数据 地址：/api/list 请求方式post 请求需要带参数
export const reqGetSearchInfo = params =>
    requests({
        url: "/api/list",
        method: "post",
        data: params,
    });