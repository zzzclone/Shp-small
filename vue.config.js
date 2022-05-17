const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});
module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 配置代理跨域
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn", // 我们要代理的真实接口地址
            },
            // pathRewrite: { "^/api": "" },
        },
    },
};