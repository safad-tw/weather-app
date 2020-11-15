import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from './../actions/actionTypes';
import * as actions from './../actions/weatherFetchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Redux actions', () => {
  it('should create an action to weather fetch data success', () => {
    const weather = {}
    const expectedAction = {
      type: types.WEATHER_DATA_FETCH_SUCCESS,
      payload: weather
    }
    expect(actions.weatherFetchDataSuccess(weather)).toEqual(expectedAction)
  })

  it('should create an action to weather fetch data has error', () => {
    const error = true
    const expectedAction = {
      type: types.WEATHER_DATA_HAS_ERRORED,
      payload: error
    }
    expect(actions.weatherDataHasErrored(error)).toEqual(expectedAction)
  })

  it('should create an action to weather fetch data is loading', () => {
    const error = true
    const expectedAction = {
      type: types.WEATHER_DATA_IS_LOADING,
      payload: error
    }
    expect(actions.weatherDataIsLoading(error)).toEqual(expectedAction)
  })
})
