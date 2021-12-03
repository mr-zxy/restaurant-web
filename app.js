// 引入模块
const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const router = require('koa-router')();
const koaBody = require('koa-body');
const static = require('koa-static');
// 实例化
const app = new Koa();
app.use(koaBody());
// 配置静态资源路径
app.use(static(path.join(__dirname,'/dist')));
// 启动路由
app.use(router.routes()).use(router.allowedMethods());
// 监听端口号
app.listen(3001, () => {
  console.log('server is listen in 3001');
});