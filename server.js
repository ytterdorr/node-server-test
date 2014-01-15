var koa = require('koa');
var logger = require('koa-logger');
var app = koa();

// logger

app.use(logger());
//app.use(common.responseTime());
//app.use(common.compress());

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);