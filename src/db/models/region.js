export default (sequelize, DataTypes) => {
  const region = sequelize.define('region', {
    name: DataTypes.STRING,
    loc: DataTypes.GEOMETRY('POINT')
  })

  region.associate = models => {
    region.hasMany(models.author, {
      as: 'Authors',
      foreignKey: 'regionId'
    })
    region.belongsToMany(models.sign, {
      as: 'Signs',
      through: 'region_sign',
      foreignKey: 'regionId',
      otherKey: 'signId'
    })
  }

  return region
}

// https://stackoverflow.com/questions/32059758/how-to-insert-a-postgis-geometry-point-in-sequelize-orm
