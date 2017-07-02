// https://www.npmjs.com/package/dotenv
require('dotenv').config();

var restify = require('restify');
var server = restify.createServer({
  name: process.env.npm_package_name,
  version: process.env.npm_package_version
});

server.use(restify.plugins.bodyParser());

server.get('/', function(req, res, next){
  res.send({'message': 'welcome to the api'});
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
