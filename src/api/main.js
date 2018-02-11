import utils from '../utils'
import {
  APP_NAME as name,
  APP_VERSION as version
} from '../config/constant'

const register = (server) => {
  server.get('/', (req, res, next) => {
    // hasOwnProperty avoids inherited properties
    const routes = utils.listRoutes(server)
    res.send({ routes })
    next()
  })

  server.get('/name', (req, res, next) => {
    res.send({ name })
    next()
  })

  server.get('/version', (req, res, next) => {
    res.send({ version })
    next()
  })
}

export default { register }
