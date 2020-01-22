"use strict";

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _server = require("react-dom/server");

var _reactHelmet = require("react-helmet");

var _ServerApp = _interopRequireDefault(require("./ssr/ServerApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 7000;
var head = '';
app.use(_express["default"]["static"]('public'));
app.use('/assets', _express["default"]["static"]('assets')); // app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  console.log(req.url);
  var app = (0, _server.renderToString)(_react["default"].createElement(_ServerApp["default"], {
    url: req.url
  }));

  var helmet = _reactHelmet.Helmet.renderStatic(); // console.log(__dirname+'/public/index')


  _fs["default"].readFile(__dirname + '/public/index', 'utf-8', function (err, data) {
    head = helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.style.toString() + helmet.script.toString();
    data = data.replace('<!-- <HELMET /> -->', head); // console.log(typeof(app),app)
    // console.log(typeof(data),data)

    data = data.replace('<!-- <HTML /> -->', app);
    data = data.replace('__BROWSER_REFRESH_URL__', "<script src=\"".concat(process.env.BROWSER_REFRESH_URL, "\"></script>")); // data = data.replace('<!-- <BROWSER_REFRESH_URL /> -->',process.env.BROWSER_REFRESH_URL)

    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
});
app.listen(PORT, function () {
  console.log("listening to port ".concat(PORT));
  process.send && process.send("online");
}); // const HTML=(ssr, helmet)=>{
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
// 	<meta name="robots" content="noindex" />
//         <meta charset="utf-8" />
//         <!-- <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> -->
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#022143" />
//         <meta name="description" content="Web site created using create-react-app" />
//         <link rel="apple-touch-icon" href="logo192.png" />
//         <link rel="stylesheet" href="/static/css/all.css">
//         <link rel="stylesheet" href="/static/css/app.css">
//         ${helmet.title.toString()}
//         ${helmet.meta.toString()}
//         ${helmet.link.toString()}
//     </head>
//     <body>
//         <div id="root">
//         ${html}
//         </div>
//         <script type="text/javascript" src="/static/js/vendors~admin~main.js"></script>
//         <script type="text/javascript" src="/static/js/vendors~main.js"></script>
//         <script type="text/javascript" src="/static/js/main.js"></script>
//         <style>
//             @font-face {
//             font-family: HN;
//             src: url(/fonts/HelveticaNeue-Heavy.otf);
//             font-weight: bold;
//             }
//             @font-face {
//             font-family: SF;
//             src: url(/fonts/SF-UI-Display-Regular.otf);
//             font-weight: normal;
//             }
//             @font-face {
//             font-family: avenir;
//             src: url(/fonts/AvenirLTStd-Light.otf);
//             font-weight: normal;
//             }
//         </style>
//     </body>
//     </html>
//     `
// }
