"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _Nav = _interopRequireDefault(require("./All/Nav"));

var _Routes = _interopRequireDefault(require("./Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Index from './index/index'
// import About from './about/about'
var All = function All() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_Nav["default"], null), _react["default"].createElement(_Routes["default"], null)));
};

_reactDom["default"].render(_react["default"].createElement(All, null), document.getElementById('root'));