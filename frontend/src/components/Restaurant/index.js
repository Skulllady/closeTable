import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import restaurantReducer, { getRestaurant } from '../../store/restaurant';

function Restaurant() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const restaurant = useSelector(state => state.restaurant.restaurant)
    const reviews = useSelector(state => state.restaurant.reviews)

    useEffect(() => {
        dispatch(getRestaurant(id))
    }, [dispatch, id])

    console.log(restaurant)
    console.log(reviews)
    return (
        <div>
            <div>
                We are at this restaurant
                <div>
                {restaurant?.id}: {restaurant?.name}

                </div>
                These are the reviews for such restaurant:
                {reviews?.map(review => (
                    <div key={review.id}>
                        {review.id}: {review.review}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurant;
