var utils = require('../utils');

module.exports.register = (server) => {
  server.get('/routes', function(req, res, next){
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
};
