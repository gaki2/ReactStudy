const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/v1/users", {
            target: "https://api.notion.com",
            changeOrigin:true
        })
    )
}
