import { WEATHER_DATA_FETCH_SUCCESS,WEATHER_DATA_HAS_ERRORED,WEATHER_DATA_IS_LOADING } from "./actionTypes";

export function weatherDataHasErrored(bool) {
    return {
        type: WEATHER_DATA_HAS_ERRORED,
        payload: bool
    };
}
export function weatherDataIsLoading(bool) {
    return {
        type: WEATHER_DATA_IS_LOADING,
        payload : bool
    };
}
export function weatherFetchDataSuccess(weather) {
    return {
        type: WEATHER_DATA_FETCH_SUCCESS,
        payload: weather
    };
}

/* Calls weather api and dispatches actions*/

export function weatherFetchData(location) {

    const API_KEY = process.env.REACT_APP_SECRET_WEATHER_API_CODE;
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q='+ location+ '&appid=' + API_KEY;

    return (dispatch) => {
        dispatch(weatherDataIsLoading(true));
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(weatherDataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((weather) => {
                dispatch(weatherFetchDataSuccess(weather))
            })
            .catch(() => dispatch(weatherDataHasErrored(true)));
    };
}