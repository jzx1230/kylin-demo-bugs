"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pluginName=void 0,exports.default=function(e){e.program,e.kylinApp,e.hint;var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{webpack:(0,_build2.default)(r)}};var _build=require("./runtime/build.js"),_build2=_interopRequireDefault(_build),_path=require("path"),_path2=_interopRequireDefault(_path),_fs=require("fs"),_fs2=_interopRequireDefault(_fs),_chalk=require("chalk"),_chalk2=_interopRequireDefault(_chalk);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var cwd=process.cwd(),pluginName=exports.pluginName="@ali/kylin-plugin-env";