import {
    WEATHER_DATA_FETCH_SUCCESS,
    WEATHER_DATA_HAS_ERRORED,
    WEATHER_DATA_IS_LOADING
} from "../actions/actionTypes";
import {
    accessSync
} from "fs";

/* Store initial state */
const initialState = {
    weatherData: [],
    isWeatherDataLoading: false,
    isWeatherDataHasErrored: false
};

/* Reducer funcion */
function rootReducer(state = initialState, action) {

    switch (action.type) {
        /* executed when api is successful */
        case WEATHER_DATA_FETCH_SUCCESS:
            return Object.assign({}, state, {
                weatherData: [action.payload].concat(state.weatherData)
            });
        /* executed when api throws error */
        case WEATHER_DATA_HAS_ERRORED:
            return Object.assign({}, state, {
                isWeatherDataHasErrored: action.payload
            });
        /* executed when api is loading */
        case WEATHER_DATA_IS_LOADING:
            return Object.assign({}, state, {
                isWeatherDataLoading: action.payload
            });
        default:
            return state;
    }
};

export default rootReducer;