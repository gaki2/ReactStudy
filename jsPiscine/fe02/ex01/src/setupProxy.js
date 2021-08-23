const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy('/v1/pages/6e13eb50716646e2a2c2d9b613d6874c', {
            target: "https://api.notion.com",
            changeOrigin: true
        })
    )
};