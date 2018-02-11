import Bunyan from 'bunyan'
import restify from 'restify'

import { APP_NAME as name } from '../config/constant'

// NOTE: do we want to include version in logging?
const logger = new Bunyan({
  name,
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

export default logger
