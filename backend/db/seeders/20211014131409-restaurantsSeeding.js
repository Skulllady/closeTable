'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Restaurants', [
      {
        name: "Ralph's Corner Dinner",
        address: "2333 W Main St Suite c 15, Lansdale, PA 19446",
        latitude: 40.242801,
        longitude: -75.285207,
        phoneNumber: "(267)663-7585",
        daysOfOperation: "Monday - Sunday",
        hoursOfOperation: "0600 - 1500",
        pricing: "$",
        capacity: 40,
        menu: "https://user-images.githubusercontent.com/24822233/137326741-e156dcf5-6d17-41d3-adad-d5b50e7028eb.jpg",
        images: [
          "https://images.unsplash.com/photo-1543373072-69f3d4788832?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZSUyMGRpbmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGluZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        ],
        cuisine: "New York American",
        description: "All American dinner",
        diningOptions: "Brunch, Delights and Appetizers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mary's Kitchen",
        address: "616 Virginia Beach Blvd, Virginia Beach, VA 23451",
        latitude: 36.844480,
        longitude: -75.982280,
        phoneNumber: "(837)6587-583",
        daysOfOperation: "Monday - Sunday",
        hoursOfOperation: "0700 - 1400",
        pricing: "$$",
        capacity: 45,
        menu: "https://user-images.githubusercontent.com/74742629/137333106-34edf859-aeb2-47ec-8856-87317677e472.jpg",
        images: [
          "https://images.unsplash.com/photo-1572686101128-2d7a19696ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          "https://user-images.githubusercontent.com/74742629/137333344-cf44b972-830c-4eb2-989c-93313082ba53.jpg",
        ],
        cuisine: "American Breakfast",
        description: "Breakfast House, ready to serve",
        diningOptions: "Breakfast, Brunch",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
