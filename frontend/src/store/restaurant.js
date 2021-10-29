import { csrfFetch } from './csrf';

const LOAD = "restaurants/load";

const load = (list) => ({
    type: LOAD,
    list
});

export const getRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
        return list;
    }
}

export const getRestaurant = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${id}`);

    if(res.ok) {
        const list = await res.json();
        dispatch(load(list));
        return list;
    }
}


const initialState = [];


const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return action.list;
        default:
            return state;
    }
};

export default restaurantReducer;
