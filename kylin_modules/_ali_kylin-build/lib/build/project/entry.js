"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getEntry=getEntry,exports.getExternalEntry=getExternalEntry,exports.getHtmlPluginArrayWithNunjucks=getHtmlPluginArrayWithNunjucks,exports.getHtmlPluginArray=getHtmlPluginArray,exports.getHtmlPluginArrayWithReplace=getHtmlPluginArrayWithReplace;var _fs=require("fs"),_fs2=_interopRequireDefault(_fs),_path=require("path"),_path2=_interopRequireDefault(_path),_htmlWebpackPlugin=require("html-webpack-plugin"),_htmlWebpackPlugin2=_interopRequireDefault(_htmlWebpackPlugin),_template=require("./template"),_utils=require("../../utils"),_chalk=require("chalk"),_chalk2=_interopRequireDefault(_chalk);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getEntry(e,t){const n={};if(t.pages)for(let e in t.pages)n[e]=[t.pages[e].entry];return n}function getExternalEntry(e,t){let n=null;return t.externalEntry&&(n=Object.assign({},t.externalEntry)),n}function*getHtmlPluginArrayWithNunjucks(e,t){const n=[],l={minify:{removeComments:!1,collapseWhitespace:!0,removeAttributeQuotes:!1},chunksSortMode:"dependency"};(0,_template.getRender)(e,t);if(t.pages)for(var a in t.pages){t.pages[a].index&&_utils.hint.warn("[package.json]",`'kylinApp.pages["${a}"].index' is ${_chalk2.default.yellow("Deprecated")}, use 'kylinApp.pages["${a}"].template' instead`);let r=t.pages[a].template||t.pages[a].index||t.pageTemplate,i=t.pages[a].data;const u=_path2.default.resolve(e.cwd,r),p=JSON.stringify({[u]:i}),s=`${require.resolve("../plugin/nunjucks-loader")}!${require.resolve("../plugin/nunjucks-template-loader")}?data=${p}!${u}`;let o={filename:t.pages[a].html||t.options.htmlOutputName.replace("[entry]",`${a}`),template:s,inject:!0,chunks:[a]};e.prod&&(o=Object.assign(o,l)).chunks.push("common"),n.push(new _htmlWebpackPlugin2.default(o))}return n}function*getHtmlPluginArray(e,t){return t.options.enableTemplateNunjucks?yield getHtmlPluginArrayWithNunjucks(e,t):yield getHtmlPluginArrayWithReplace(e,t)}function*getHtmlPluginArrayWithReplace(e,t){let n=[];var l={minify:{removeComments:!1,collapseWhitespace:!0,removeAttributeQuotes:!1},chunksSortMode:"dependency"};if(t.pages&&t.pageTemplate){const r=_fs2.default.readFileSync(_path2.default.join(e.cwd,t.pageTemplate)).toString();for(var a in t.pages){let i=t.pages[a].index,u=r;if(i){let t=_fs2.default.readFileSync(_path2.default.join(e.cwd,i));u=u.replace("\x3c!--PageContent--\x3e",t.toString())}let p={filename:`${a}.html`,templateContent:u,inject:!0,chunks:[a]};e.prod&&(p=Object.assign(p,l)).chunks.push("common"),n.push(new _htmlWebpackPlugin2.default(p))}}else{let t={filename:"index.html",templateContent:"<html><head><title>页面没有标题</title></head><body>Kylin默认页面</body></html>",inject:!0};e.prod&&(t=Object.assign(t,l)),n.push(new _htmlWebpackPlugin2.default(t))}return n}