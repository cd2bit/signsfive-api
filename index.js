// https://www.npmjs.com/package/dotenv
require('dotenv').config();

var restify = require('restify');
var errors = require('restify-errors');
var logger = require('./services/logger');
var utils = require('./utils');
var models = require('./db/models');

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


server.get('/categories', function(req, res, next){
  res.send({data: [{ id: 1, name: "science",      short: "s"},
                   { id: 2, name: "technology",   short: "t"},
                   { id: 3, name: "engineering",  short: "e"},
                   { id: 4, name: "mathematics",  short: "m"}]
          });
  next();
});

server.get('/signs/12345', function(req, res, next){
  res.send({id: 12345,
	    name: "SignA",
	    rank: 1,
	    description: ["long text here"],
	    external_source: ["https://www.ruby-lang.org/en/", "https://en.wikipedia.org/wiki/Ruby_(programming_language)"],
	    tutorial: ["https://www.codeschool.com"],
	    category: [ 1, 3 ],
	    region: [ 1, 2 ],
	    tags: [ 1, 2, 3 ]
	  });
  next();
});

server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports.server=server;
