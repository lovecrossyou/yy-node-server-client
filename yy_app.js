var express = require('express');
var compression = require('compression');
// Create our Express application
var yy_app = express();
var proxys = require('./src/proxy/proxys')
var http = require('http');

yy_app.use(compression());
yy_app.disable('x-powered-by');
var ejs = require('ejs');  //我是新引入的ejs插件
yy_app.set('views', './views'); // 指定视图所在的位置
//
yy_app.engine('html', ejs.__express);
yy_app.set('view engine', 'html');
yy_app.use('/yy', express.static(__dirname + "/views/"));
yy_app.use('/h5', proxys);

var server = http.createServer(yy_app).listen(7003, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('ranning at host', host);
    console.log('ranning at port', port);
});

