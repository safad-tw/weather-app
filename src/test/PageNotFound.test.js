import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import {PageNotFound} from './../PageNotFound';

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('should render page component', () => {

    const wrapper = shallow(
        <PageNotFound />
    );
    expect(wrapper).toBeTruthy();
    
  })

  it('should check h1 component is loaded', () => {

    const wrapper = shallow(
        <PageNotFound />
    );
    const h1 = wrapper.find('h1')
    expect(h1).toHaveLength(1)
    expect(h1.text()).toEqual('404')

    
  })

  it('should check h3 component is loaded', () => {

    const wrapper = shallow(
        <PageNotFound />
    );
    const h3 = wrapper.find('h3')
    expect(h3).toHaveLength(1)
    expect(h3.text()).toEqual('This page doesnt exist')

    
  })
})