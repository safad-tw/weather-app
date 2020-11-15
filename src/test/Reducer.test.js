import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import * as types from './../actions/actionTypes';
import rootReducer from './../reducers/index';

Enzyme.configure({ adapter: new Adapter() })

describe('Redux-reducer', () => {
   
  it('should return the initial state', () => {
    let newState = {
        weatherData: [],
        isWeatherDataLoading:false,
        isWeatherDataHasErrored:false
    }
    expect(rootReducer(undefined, {})).toEqual(newState)
  })

  it('should return the state for while loading data', () => {
    const newState =  rootReducer([],{
        type: types.WEATHER_DATA_IS_LOADING,
        payload: true
      });
    expect(newState.isWeatherDataLoading).toBeTruthy();
  })

  it('should return the state for fetch data has errored', () => {
    const newState =  rootReducer([],{
        type: types.WEATHER_DATA_HAS_ERRORED,
        payload: true
      });
    expect(newState.isWeatherDataHasErrored).toBeTruthy();
  })

  
})