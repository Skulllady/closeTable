const express = require('express');
const asyncHandler = require('express-async-handler');
const { Restaurant, Review, User } = require('../../db/models')

const router = express.Router();

//view all restaurants listed
router.get('/restaurants', asyncHandler(async function (req, res) {

    const restaurants = await Restaurant.findAll({
        order: [['id', 'DESC']]
    })

    return res.render({ restaurants })

}))

//view a specific restaurant
router.get('/restaurants/:id', asyncHandler(async function (req, res) {

    const restaurantId = parseInt(req.params.id, 10)

    const restaurant = await Restaurant.findbyPk(restaurantId);

    let reviews = await Review.findAll({
        where: {
            restaurantId
        },
        include: User,
        order: [['createdAt', 'DESC']]

    })
    return res.render({ restaurant, reviews })
}))

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



}))
