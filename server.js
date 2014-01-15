var koa = require('koa');
var logger = require('koa-logger');
var app = koa();

var router = require('koa-router');

// logger
app.use(logger());
app.use(router(app));


app.get('/',function *(){
  this.body = 'Hello World this is your lord speaking.';
});

app.resource('animals', require('./animals'));

app.listen(3000);