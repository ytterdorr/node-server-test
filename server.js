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
  yield send(this, 'client/views/index.html', { root: staticRoot });
});

app.use(mount('/js',serve('client/js')));


app.resource('animals', require('./animals'));
app.resource('games', require('./games'));

app.listen(3000);

console.log('Listening on port 3000');
