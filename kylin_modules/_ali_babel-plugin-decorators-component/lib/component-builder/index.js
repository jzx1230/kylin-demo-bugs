"use strict";exports.__esModule=!0,exports.ComponentBuilder=void 0;var _objectDestructuringEmpty2=require("babel-runtime/helpers/objectDestructuringEmpty"),_objectDestructuringEmpty3=_interopRequireDefault(_objectDestructuringEmpty2),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_data=require("./property/data"),_data2=_interopRequireDefault(_data),_props=require("./property/props"),_props2=_interopRequireDefault(_props),_default=require("./property/default"),_default2=_interopRequireDefault(_default),_watch=require("./property/watch"),_watch2=_interopRequireDefault(_watch);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var ComponentBuilder=exports.ComponentBuilder=function(){function e(t,r){(0,_classCallCheck3.default)(this,e),this.path=t,this.state=r}return e.prototype.loadProperty=function(e){(0,_objectDestructuringEmpty3.default)(e)},e.prototype.loadProperties=function(){this.loadProperty(_data2.default),this.loadProperty(_props2.default),this.loadProperty(_default2.default),this.loadProperty(_watch2.default)},e}();