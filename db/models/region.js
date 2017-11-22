'use strict';
module.exports = (sequelize, DataTypes) => {
  var region = sequelize.define('region', {
    name: DataTypes.STRING,
    loc: DataTypes.GEOMETRY('POINT')
  });

  return region;
};

// https://stackoverflow.com/questions/32059758/how-to-insert-a-postgis-geometry-point-in-sequelize-orm
