// https://www.npmjs.com/package/dotenv
// NOTE: if we uncomment this, this will break test as it stream
// process.env.API_PORT as valid and break test
// NOTE: we are keeping this as reminder incase if we need it later
// and we will also need to fix it to work with test as well 
// import dotenv from 'dotenv'
// dotenv.config()

import restify from 'restify'
import errors from 'restify-errors'
import logger from './services/logger'
import utils from './utils'
import models from './db/models'

/* here's a way to check that we can connect to database correctly
models.sequelize
  .authenticate()
  .then(function(){
    logger.info('Database connection has been established successfully.');
  }).catch(function(err){
    logger.error(err, 'Unable to connect to the database');
  });
*/

const server = restify.createServer({
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  log: logger,
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.gzipResponse())
server.use(restify.plugins.throttle({burst: 5, rate: 1, ip: true}))
server.use(restify.plugins.requestLogger())
server.use(utils.auth.jwtCheck.unless({
  path: ['/', '/name', '/version']
}))

require('./api').register(server)

server.listen(process.env.API_PORT, () => {
  console.log('%s listening at %s', server.name, server.url)
})

module.exports.server = server
