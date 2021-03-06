export default {
  entry: './src/index.js',
  // theme: "./theme.config.js",
  publicPath: '/',
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  env: {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  html: {
    "template": "./src/index.ejs",
    // "favicon": "./public/favicon.ico",
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  },
  alias:{
    '@': `${__dirname}/src`,
    components: `${__dirname}/src/components`,
    utils: `${__dirname}/src/utils`,
    services: `${__dirname}/src/services`,
    models: `${__dirname}/src/models`,
    routes: `${__dirname}/src/routes`,
    assets: `${__dirname}/src/assets`,
  }
}
