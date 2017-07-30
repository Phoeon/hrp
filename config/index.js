// // see http://vuejs-templates.github.io/webpack for documentation.
// var path = require('path')

// module.exports = {
//   build: {
//     env: require('./prod.env'),
//     index: path.resolve(__dirname, '../dist/index.html'),
//     assetsRoot: path.resolve(__dirname, '../dist'),
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     productionSourceMap: true,
//     // Gzip off by default as many popular static hosts such as
//     // Surge or Netlify already gzip all static assets for you.
//     // Before setting to `true`, make sure to:
//     // npm install --save-dev compression-webpack-plugin
//     productionGzip: false,
//     productionGzipExtensions: ['js', 'css'],
//     // Run the build command with an extra argument to
//     // View the bundle analyzer report after build finishes:
//     // `npm run build --report`
//     // Set to `true` or `false` to always turn it on or off
//     bundleAnalyzerReport: process.env.npm_config_report
//   },
//   dev: {
//     env: require('./dev.env'),
//     port: 8080,
//     autoOpenBrowser: true,
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     proxyTable: {},
//     // CSS Sourcemaps off by default because relative paths are "buggy"
//     // with this option, according to the CSS-Loader README
//     // (https://github.com/webpack/css-loader#sourcemaps)
//     // In our experience, they generally work as expected,
//     // just be aware of this issue when enabling this option.
//     cssSourceMap: false
//   }
// }

// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

var cookie = require('./cookie');

var accessToken = "sfmv2irhdv9c8le9jb6t6t4gu6";

function onProxyRes(proxyRes, req, res) {
    var proxyKey = 'set-cookie';
    if (proxyKey in proxyRes.headers){
        var pdVal = proxyRes.headers[proxyKey];
        if(pdVal){
            if ('set-cookie' == proxyKey) {
                var cookie_set = cookie.getHandler(req , res)
                pdVal.forEach(function(cookie_v){
                    cookie_set.set(cookie_v)
                })
            }else
                res.setHeader( proxyKey , pdVal)
        }

    }
}
function onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader("cookie" , ';PHPSESSID='+accessToken);
}

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        "/api":{target:'http://192.168.40.7:8080', changeOrigin:true},
        "/blog":{target:"http://aloysians.com",changeOrigin:true},
        "/dashboard":{
            target:"http://dev.soyoung.com",
            changeOrigin:true,
            cookieDomainRewrite : {
            },
            onProxyRes : onProxyRes,
            onProxyReq : onProxyReq
        },
        "/saas":{
            target:"http://dev.soyoung.com",
            changeOrigin:true,
            cookieDomainRewrite : {
            },
            onProxyRes : onProxyRes,
            onProxyReq : onProxyReq
        },
        "/other":{target:"http://www.other.com",changeOrigin:true}
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
