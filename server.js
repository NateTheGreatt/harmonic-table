var koa = require('koa');
var app = koa();

app.use(require('koa-static')(__dirname));

app.listen(3000,'0.0.0.0');
