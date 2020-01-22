"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Nav = function Nav() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home"), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/About"
  }, "About"));
};

var _default = Nav;
exports["default"] = _default;