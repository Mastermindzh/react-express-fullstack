'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dashboard = sequelize.define('Dashboard', {
    name: DataTypes.STRING
  }, {});
  Dashboard.associate = function(models) {
    // associations can be defined here
  };
  return Dashboard;
};