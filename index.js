// https://www.npmjs.com/package/dotenv
require('dotenv').config();

var restify = require('restify');
var errors = require('restify-errors');
var logger = require('./services/logger');
var utils = require('./utils');
var models = require('./db/models');

/* here's a way to check that we can connect to database correctly
models.sequelize
  .authenticate()
  .then(function(){
    logger.info('Database connection has been established successfully.');
  }).catch(function(err){
    logger.error(err, 'Unable to connect to the database');
  });
*/

var server = restify.createServer({
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  log: logger
});

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.requestLogger());

server.get(/\/docs\/?.*/, restify.plugins.serveStatic({
  directory: './static',
  default: 'index.html'
}));
server.get(/\/(?:vendor|css|img)\/?.*/, restify.plugins.serveStatic({
  directory: './static/docs'
}));

server.use(restify.plugins.throttle({burst: 5, rate: 1, ip: true}));
server.use(utils.auth.jwtCheck.unless({path: ['/name', '/version', '/routes']}));

require('./api').register(server);

server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports.server=server;
