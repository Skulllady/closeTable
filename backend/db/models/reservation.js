'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    numberOfPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {foreignKey: 'userId'})
    Reservation.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
  };
  return Reservation;
};
