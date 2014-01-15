var koa = require('koa');
var logger = require('koa-logger');
var app = koa();

// logger

app.use(logger());

app.use(function *(){
  this.body = 'Hello World this is your lord speaking.';
});

app.listen(3000);