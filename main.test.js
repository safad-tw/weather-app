import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from ;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore({}); // Instead of {}, you can give your initial store
  // shallow(
  //   <Provider store={store}>   
  //     <App />
  //   </Provider>
  // );
});