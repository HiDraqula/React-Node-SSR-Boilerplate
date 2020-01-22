import React from 'react'
import express from 'express'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet';

import ServerApp from './ssr/ServerApp'

const app = express();
const PORT = 7000;
var head = '';

app.use(express.static('public'))
app.use('/assets',express.static('assets'))
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('*',(req,res)=>{
    console.log(req.url);
    const app = renderToString(
        <ServerApp url={req.url} />
    );
    const helmet = Helmet.renderStatic();

    // console.log(__dirname+'/public/index')
    fs.readFile(__dirname+'/public/index','utf-8' ,(err, data)=> {
        
        head = helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()+ helmet.style.toString() + helmet.script.toString();

        data=data.replace('<!-- <HELMET /> -->',head)
        // console.log(typeof(app),app)
        // console.log(typeof(data),data)
        data = data.replace('<!-- <HTML /> -->',app)
        
        data = data.replace('__BROWSER_REFRESH_URL__',`<script src="${process.env.BROWSER_REFRESH_URL}"></script>`)
        // data = data.replace('<!-- <BROWSER_REFRESH_URL /> -->',process.env.BROWSER_REFRESH_URL)

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
})

app.listen(PORT, () => {console.log(`listening to port ${PORT}`);process.send && process.send("online")})


// const HTML=(ssr, helmet)=>{
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
