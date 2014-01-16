var koa = require('koa');
var logger = require('koa-logger');
var app = koa();

var send = require('koa-send');
var serve = require('koa-static');

var router = require('koa-router');
var mount = require('koa-mount');

var staticRoot = __dirname;

// logger
app.use(logger());
app.use(router(app));

app.get('/',function *(){
  yield send(this, __dirname + '/client/index.html');
});

app.use(mount('/components',serve('client/components')));
app.use(mount('/bower_components',serve('bower_components')));

app.resource('animals', require('./animals'));

app.listen(3000);

console.log('Listening on port 3000');
