"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var index = function index() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("title", null, "Index"), _react["default"].createElement("meta", {
    name: "author",
    content: "Aniket Sharma, azillion190@gmail.com, www.aniketsharma.tk"
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: "https://seomarketingindia.com/"
  })), _react["default"].createElement("h1", null, "Hii Their, Aniket Here"));
};

var _default = index;
exports["default"] = _default;