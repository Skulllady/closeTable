import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRestaurants  } from '../../store/restaurant';
import './Restaurants.css';

function Restaurants() {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => Object.values(state.restaurant));

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    return (
        <div>
            <div>
                {restaurants?.map(res => (
                    <div key={res.id}>
                        <button
                            className="nav-entry-image"
                            style={{backgroundImage: `url('${res.images[1]}')`}}
                        >
                        </button>
                        {res.id}: {res.name}
                        <div>
                            {res.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurants;
