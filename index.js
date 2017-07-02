// https://www.npmjs.com/package/dotenv
require('dotenv').config();

var restify = require('restify');
var server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.get('/', function(req, res, next){
  res.send({'message': 'welcome to the api'});
  next();
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
