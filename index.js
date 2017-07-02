var restify = require('restify');
var server = restify.createServer();

server.get('/', function(req, res, next){
  res.send({'message': 'welcome to the api'});
  next();
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
