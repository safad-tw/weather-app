import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './../components/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('should render App component', () => {
    const store = mockStore({}); // Instead of {}, you can give your initial store
    const wrapper = shallow(
      <Provider store={store}>   
        <App />
      </Provider>
    );
    const paragraph = wrapper.find('div')
    expect(wrapper).toBeTruthy();
  })
})
