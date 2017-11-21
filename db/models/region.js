'use strict';
module.exports = (sequelize, DataTypes) => {
  var Region = sequelize.define('Region', {
    name: DataTypes.STRING,
    loc: DataTypes.GEOMETRY('POINT')
  }, {
    classMethods: {
      associate: function(models) {
        Region.belongsToMany(models.Author, {as: "Authors", through: "author_region", foreignKey: "region_id", otherKey: "author_id"});
        Region.belongsToMany(models.Sign, {as: "Signs", through: "sign_region", foreignKey: "region_id", otherKey: "sign_id"});
      }
    }
  });
  return Region;
};
