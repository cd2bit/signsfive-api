require('dotenv').config();
var logger = require('./logger');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  dialect: 'mysql',
  pool: {min: 0, max: 10, idle: 100},
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(function(){
    logger.info('Database connection has been established successfully.');
  }).catch(function(err){
    logger.error(err, 'Unable to connect to the database');
  });

module.exports=sequelize;
