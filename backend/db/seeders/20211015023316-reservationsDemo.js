'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let usedPairs = {};
    let reservations = [];

    return queryInterface.bulkInsert('Reservations', [
      {
        userId: 1,
        restaurantId: 1,
        numberOfPeople: 4,
        startTime: new Date('October 25, 2021 13:00:00'),
        date: new Date('October 25, 2021'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        restaurantId: 1,
        numberOfPeople: 2,
        startTime: new Date('October 29, 2021 15:30:00'),
        date: new Date('October 29, 2021'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        restaurantId: 2,
        numberOfPeople: 5,
        startTime: new Date('November 10, 2021 19:00:00'),
        date: new Date('November 10, 2021'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
