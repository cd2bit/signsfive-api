import bunyan from 'bunyan'
import restify from 'restify'

const logger = new bunyan({
  name: process.env.npm_package_name,
  streams: [
    {
      stream: process.stdout,
      level: 'info'
    },
    {
      path: 'server.log',
      level: 'trace'
    }
  ],
  serializers: restify.bunyan.serializers
})

module.exports = logger
