"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _Nav = _interopRequireDefault(require("./All/Nav"));

var _Routes = _interopRequireDefault(require("./Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Provider } from 'react-redux'
// import store from './store/store';
// import {Route} from 'react-router-dom'
// import Index from './index/index'
// import About from './about/about'
function Root(props) {
  // console.log(props)
  return (// <Provider store={store}>
    _react["default"].createElement(_reactRouter.StaticRouter, {
      location: props.url
    }, _react["default"].createElement(_Nav["default"], null), _react["default"].createElement(_Routes["default"], null)) // </Provider>

  );
}