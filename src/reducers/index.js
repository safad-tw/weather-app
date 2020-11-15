import { WEATHER_DATA_FETCH_SUCCESS,WEATHER_DATA_HAS_ERRORED,WEATHER_DATA_IS_LOADING } from "../actions/actionTypes";

const initialState = {
    weatherData: [],
    isWeatherDataLoading:false,
    isWeatherDataHasErrored:false
};
  
function rootReducer(state = initialState, action) {
    if (action.type === WEATHER_DATA_FETCH_SUCCESS) {
        return Object.assign({}, state, {
            weatherData: [action.payload].concat(state.weatherData)
          });
    }

    if (action.type === WEATHER_DATA_HAS_ERRORED) {
        return Object.assign({}, state, {
            isWeatherDataHasErrored: action.payload
          });
    }

    if (action.type === WEATHER_DATA_IS_LOADING) {
        return Object.assign({}, state, {
            isWeatherDataLoading: action.payload
          });
    }
    return state;
};
  
export default rootReducer;
  