import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import { ENVIRONMENT } from '../../config/constant'
import databaseConfigs from '../../config/database'

const basename = path.basename(__filename)
const databaseConfig = databaseConfigs[ENVIRONMENT]

const db = {}

let sequelize
if (databaseConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[databaseConfig.use_env_variable], databaseConfig)
} else {
  sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
