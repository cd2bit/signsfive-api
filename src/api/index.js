import main from './main'
import category from './category'
import sign from './sign'

export function register(server) {
  main.register(server)
  category.register(server)
  sign.register(server)
}
