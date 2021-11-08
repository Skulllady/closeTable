import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRestaurants } from '../../store/restaurant';
import './Restaurants.css';

function Restaurants() {
    const dispatch = useDispatch();
    let restaurants = useSelector(state => state.restaurant);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    console.log(restaurants)
    return (
        <div>
            <div>
                {restaurants?.length !== 0 ? Array.from(restaurants)?.map(res => (
                    <div>
                        <NavLink key={res.id} to={`/restaurants/${res.id}`}>
                            <button
                                className="nav-entry-image"
                                style={{ backgroundImage: `url('${res.images[0]}')` }}
                            >
                            </button>
                            {res.id}: {res.name}
                            <div>
                            </div>
                        </NavLink>
                        {res.description}
                    </div>
                )): <div>
                        Nothing here
                    </div>

                }
            </div>
        </div>
    );
}

export default Restaurants;
