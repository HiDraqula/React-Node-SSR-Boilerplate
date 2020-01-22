"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./index/index"));

var _about = _interopRequireDefault(require("./about/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    render: function render() {
      return _react["default"].createElement(_index["default"], null);
    }
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/About",
    render: function render() {
      return _react["default"].createElement(_about["default"], null);
    }
  }));
}