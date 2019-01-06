var express = require('express');
var compression = require('compression');
// Create our Express application
var yy_app_client = express();
var proxys = require('./src/proxy/proxys')
var http = require('http');

yy_app_client.use(compression());
yy_app_client.disable('x-powered-by');
var ejs = require('ejs');  //我是新引入的ejs插件
yy_app_client.set('views', './views'); // 指定视图所在的位置
//
yy_app_client.engine('html', ejs.__express);
yy_app_client.set('view engine', 'html');
yy_app_client.use('/', express.static(__dirname + "/views/"));
yy_app_client.use('/api', proxys);

var server = http.createServer(yy_app_client).listen(7007, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('ranning at host', host);
    console.log('ranning at port', port);
});

