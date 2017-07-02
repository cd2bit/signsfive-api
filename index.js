// https://www.npmjs.com/package/dotenv
require('dotenv').config();

var restify = require('restify');
var errors = require('restify-errors');
var logger = require('./logger');
var utils = require('./utils');

var server = restify.createServer({
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  log: logger
});

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.throttle({burst: 5, rate: 1, ip: true}));
server.use(restify.plugins.requestLogger());

server.get('/', function(req, res, next){
  // hasOwnProperty avoids inherited properties
  var routes = utils.list_routes(server);
  res.send({routes: routes});
  next();
});

server.get('/name', function(req, res, next){
  res.send({name: process.env.npm_package_name});
  next();
});

server.get('/version', function(req, res, next){
  res.send({version: process.env.npm_package_version});
  next();
});

server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports.server=server;
