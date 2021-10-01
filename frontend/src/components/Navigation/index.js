import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);


    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">
                    <button type="button" class="btn btn-primary">Log In
                    </button>
                </NavLink>
                <NavLink to="/signup">
                    <button type="button" class="btn btn-light">Sign Up
                    </button>
                </NavLink>
            </>
        );
    }
    <ul>
        <li>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
            {/* <p>THIS IS A TEST</p> */}
        </li>
    </ul>
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <NavLink to="/" class="navbar-brand">ClosedTable</NavLink>
                <form class="d-flex">
                    {isLoaded && sessionLinks}
                    <button type="button" class="btn">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navigation;
