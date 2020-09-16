"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=webpackDevConfig;var _webpack=require("webpack"),_webpack2=_interopRequireDefault(_webpack),_webpackMerge=require("webpack-merge"),_webpackMerge2=_interopRequireDefault(_webpackMerge),_path=require("path"),_path2=_interopRequireDefault(_path),_index=require("../utils/index"),_entry=require("../project/entry"),_webpackProgressPlugin=require("../plugin/webpackProgressPlugin"),_webpackProgressPlugin2=_interopRequireDefault(_webpackProgressPlugin),_htmlWebpackInjectPlugin=require("../plugin/htmlWebpackInjectPlugin"),_htmlWebpackInjectPlugin2=_interopRequireDefault(_htmlWebpackInjectPlugin),_globalResource=require("../plugin/globalResource"),_getUglifyJsPlugin=require("../plugin/getUglifyJsPlugin"),_getUglifyJsPlugin2=_interopRequireDefault(_getUglifyJsPlugin);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function*webpackDevConfig(e,l,r){const u=require("../config/webpack.base.conf")(e,l,r);let t=(0,_index.styleLoaders)({sourceMap:!!e.sourcemap,postcss:!0});t.push({test:/\.js$/,loader:require.resolve("source-map-loader"),include:[_path2.default.resolve(e.cwd,"../../"),new RegExp(`${e.cwd}/node_modules/.*@@ali/kylin-w*/`)],exclude:null,enforce:"pre"});const a=yield(0,_entry.getHtmlPluginArray)(e,l);return u.resolve.alias=Object.assign({},u.resolve.alias,l.dirAlias),(0,_webpackMerge2.default)(u,{module:{loaders:t},devtool:e.sourcemap,output:{path:r.assetsRoot,filename:(0,_index.assetsPath)(l.options.enableChunkHashName?"js/[name].[hash:7].js":"js/[name].js"),chunkFilename:(0,_index.assetsPath)(l.options.enableChunkHashName?"js/[id].[chunkhash:7].js":"js/[id].js")},plugins:[new _htmlWebpackInjectPlugin2.default({js:Object.assign({},_globalResource.js,l.options.customVueUrl?{Vue:l.options.customVueUrl}:{}),css:Object.assign({},_globalResource.css)}),(0,_webpackProgressPlugin2.default)(),new _webpack2.default.DefinePlugin({"process.env":{NODE_ENV:'"development"'}}),(0,_getUglifyJsPlugin2.default)(e),e.order?new _webpack2.default.optimize.OccurenceOrderPlugin:null,e.hot&&e.server?new _webpack2.default.HotModuleReplacementPlugin:null,new _webpack2.default.NoErrorsPlugin].concat(a).filter(Boolean)})}module.exports=exports.default;