import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRestaurant } from '../../store/restaurant';

function Restaurant() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const restaurant = useSelector(state => state.restaurant)

    useEffect(() => {
        dispatch(getRestaurant(id))
    }, [dispatch, id])

    return (
        <div>
            <div>
                We are at this restaurant
                <div>
                {restaurant.id}: {restaurant.name}

                </div>
            </div>
        </div>
    );
}

export default Restaurant;
