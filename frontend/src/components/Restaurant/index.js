import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import restaurantReducer, { getRestaurant } from '../../store/restaurant';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import key from "./apiKey.js"

function Restaurant() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const restaurant = useSelector(state => state.restaurant.restaurant)
    const reviews = useSelector(state => state.restaurant.reviews)

    useEffect(() => {
        dispatch(getRestaurant(id))
    }, [dispatch, id])

    const containerStyle = {
        width: '600px',
        height: '600px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    console.log(key)
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
            <LoadScript
                googleMapsApiKey={key.key}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Restaurant;
