const express = require('express');
const router = express.Router();
const proxy = require('http-proxy-middleware');

// 代理服务
router.use('/', proxy({
    target: 'http://47.94.209.108:7002/',
    changeOrigin: true,
    pathRewrite: { "^/h5" : "" }
}));

module.exports = router;
