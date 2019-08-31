// const {createServer} = require('http');
// const {createProxyServer} = require('http-proxy');
// const Path = require('path');
// const Bundler = require('parcel-bundler');


// const backEnd = {
// 	protocol: 'http',
// 	host : 'localhost',
// 	port: 8080
// };


// const parcelEnd = {
// 	protocol: 'http',
// 	host: 'localhost',
// 	port: 1235
// };


// const option = {};


// const entryFiles = Path.join(__dirname, 'src', 'index.html');

// const bundler = new Bundler(entryFiles, option);

// bundler.serve();


// //create a proxy server instance
// const proxy = createProxyServer();


// //server
// const server = createServer((req, res)=>{
// 	if (req.url.includes('./data/en_US.json')){
// 		 proxy.web(req, res, {
//       // back-end server, local tomcat or otherwise
//       target: backEnd,
//       changeOrigin: true,
//       autoRewrite: true
//     });
//   } else {
//     // parcel's dev server
//     proxy.web(req, res, {
//       target: parcelEnd,
//       ws: true
//     });
//   }
// });


// console.log('Dev Proxy server on: http://localhost:5050');
// server.listen(5050);