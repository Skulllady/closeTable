'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          restaurantId: 1,
          reservationDate: new Date('October 12, 2021 13:00:00'),
          rating: 5,
          review: 'Amazing dining experience!'
        },
        {
          userId: 2,
          restaurantId: 1,
          reservationDate: new Date('September 1, 2021 17:00:00'),
          rating: 3,
          review: 'It was okay. Service was great but our food was a bit cold.'
        },
        {
          userId: 1,
          restaurantId: 2,
          reservationDate: new Date('June 3, 2021 09:00:00'),
          rating: 2,
          review: 'Had a horrible experience! The staff was friendly, but our food took over 2 hours to come out! '
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
