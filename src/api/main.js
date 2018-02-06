import utils from '../utils'

module.exports.register = (server) => {
  server.get('/', (req, res, next) => {
    // hasOwnProperty avoids inherited properties
    const routes = utils.list_routes(server)
    res.send({ routes })
    next()
  });

  server.get('/name', (req, res, next) => {
    res.send({ name: process.env.npm_package_name })
    next()
  });

  server.get('/version', (req, res, next) => {
    res.send({ version: process.env.npm_package_version })
    next()
  });
};
