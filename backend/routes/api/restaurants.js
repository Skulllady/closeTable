const express = require('express');
const asyncHandler = require('express-async-handler');
const { Restaurant, Review, User } = require('../../db/models')

const router = express.Router();

//view all restaurants listed
router.get('/', asyncHandler(async function (req, res) {

  const restaurants = await Restaurant.findAll({
    order: [['id', 'ASC']]
  })
  return res.json(restaurants)
}))


//view a specific restaurant
router.get('/:id(\\d+)', asyncHandler(async function (req, res) {

  const restaurantId = parseInt(req.params.id, 10)

  const restaurant = await Restaurant.findByPk(restaurantId);

  //get all reviews for selected restaurant
  // let reviews = await Review.findAll({
  //   where: {
  //     restaurantId
  //   },
  //   include: User,
  //   order: [['createdAt', 'DESC']]

  // })
  return res.json(restaurant)
}))


// create a review
router.post('/:id/reviews', asyncHandler(async (req, res) => {

  const { userId } = req.session.auth;
  const restaurantId = parseInt(req.params.id, 10)
  const { rating, review, reservationDate } = req.body;

  const newReview = await Review.create({
    userId,
    restaurantId,
    rating,
    review,
    reservationDate
  })

  res.sendStatus(201);

}))

// edit review
router.put('/reviews/:id', asyncHandler(async (req, res) => {
  const { userId } = req.session.auth;
  const reviewId = parseInt(req.params.id, 10);
  const reviewToUpdate = await Review.findByPk(reviewId)
  if (reviewToUpdate.userId === userId) {
    const { reservationDate, rating, review } = req.body;
    await reviewToUpdate.update({ reservationDate, rating, review })
  }
}))

module.exports = router;
