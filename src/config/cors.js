import { PORT } from './constant'

export default {
  test: [ '*' ],
  development: [ `http://localhost:${PORT}` ],
  staging: [ 'https://signsfive-api-staging.herokuapp.com' ],
  production: [ 'https://signsfive-api-production.herokuapp.com' ]
}
