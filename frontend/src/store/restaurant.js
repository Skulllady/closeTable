const LOAD = "restaurants/load";

const load = (list) => ({
    type: LOAD,
    payload: list,
});

export const getRestaurants = () => async (dispatch) => {
    const res = await fetch('/api/restaurants');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
    }
}



const initialState = []


const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            let allRes = action.payload;
            return allRes;
        default:
            return state;
    }
};

export default restaurantReducer;
