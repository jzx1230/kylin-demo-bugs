"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=init;var _kylinOptions=require("../utils/kylinOptions"),_kylinOptions2=_interopRequireDefault(_kylinOptions),_utils=require("../utils"),_shelljs=require("shelljs"),_webpack=require("webpack"),_webpack2=_interopRequireDefault(_webpack),_index=require("../../utils/index");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function*init(e){process.env.NODE_ENV="test"===process.env.NODE_ENV?process.env.NODE_ENV:e.prod?"production":"development",(0,_index.hint)("[Build]",`NODE_ENV = ${process.env.NODE_ENV}`);e.cwd;let n=(0,_utils.determineKylinConfig)(e,"kylinComponent");n=preprocessKylinComponentConfig(n),(0,_shelljs.mkdir)("-p",n.buildDir);try{n.libMode&&(yield buildPackages(e,n)),yield buildIndex(e,n)}catch(n){yield require("../log/index.js")(e,!1,{type:"component-old"}),console.error(n),process.exit(1)}yield require("../log/index.js")(e,!0,{type:"component-old"})}function*buildIndex(e,n){console.log(),(0,_index.hint)("[Build]","build for index entry");const i=require("./webpack.component.index")(e,n);return new Promise(function(n,o){(0,_webpack2.default)(i,function(i,r){i?o(i):(process.stdout.write(r.toString({colors:!0,modules:!!e.verbose,children:!!e.verbose,chunks:!!e.verbose,chunkModules:!!e.verbose})+"\n"),n())})})}function*buildPackages(e,n){console.log(),(0,_index.hint)("[Build]","build for packages");const i=require("./webpack.component.lib")(e,n);return new Promise(function(n,o){(0,_webpack2.default)(i,function(i,r){i?o(i):(process.stdout.write(r.toString({colors:!0,modules:!!e.verbose,children:!!e.verbose,chunks:!!e.verbose,chunkModules:!!e.verbose})+"\n"),n())})})}function preprocessKylinComponentConfig(e){return(e=Object.assign({entry:"index",sourceDir:"./src",buildDir:"./dist",notExternals:[],library:"kylinComponent",libMode:!1,env:{},plugins:[],parsedPlugins:[]},e)).options=(0,_kylinOptions2.default)(e.options),e.libMode&&!e.packageDir&&(e.packageDir="packages"),e}module.exports=exports.default;