//模拟数据 引入mock.js模块
import Mock from "mockjs";
//把json数据格式引入进来[json数据格式没有对外暴露，但是可以引入 webpack默认对外暴露：图片 json]
import banner from "./banner.json";
import floor from "./floor.json";
// mock数据 Mock对象里面有mock方法（请求地址，请求数据）
Mock.mock("/mock/banner", { code: 200, data: banner }); //模拟首页轮播数据
Mock.mock("/mock/floor", { code: 200, data: floor });