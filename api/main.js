var utils = require('../utils');

module.exports.register = (server) => {
  /**
   * @api {get} /name Get the name of the API
   * @apiVersion 1.0.0
   * @apiName  GetName
   * @apiGroup Main
   * @apiPermission none
   *
   * @apiSuccess {String} name Name of the project, should be `signsfive-api`
   *
   */
  server.get('/name', function(req, res, next){
    res.send({name: process.env.npm_package_name});
    next();
  });

  /**
   * @api {get} /version Get the version of the API
   * @apiVersion 1.0.0
   * @apiName  GetVersion
   * @apiGroup Main
   * @apiPermission none
   *
   * @apiSuccess {String} version Version of the API being used, should be `1.0.0`
   *
   */
  server.get('/version', function(req, res, next){
    res.send({version: process.env.npm_package_version});
    next();
  });

  /**
   * @api {get} /routes Get the available API routes
   * @apiVersion 1.0.0
   * @apiName  GetRoutes
   * @apiGroup Main
   * @apiPermission none
   *
   * @apiSuccess {Object[]} routes          List of routes (Array of Objects)
   * @apiSuccess {String}   routes.path     Path
   * @apiSuccess {String}   routes.method   HTTP request type
   * @apiSuccess {String[]} routes.versions List of versions (Array of Strings)
   *
   */
  server.get('/routes', function(req, res, next){
    // hasOwnProperty avoids inherited properties
    var routes = utils.list_routes(server);
    res.send({routes: routes});
    next();
  });

};
