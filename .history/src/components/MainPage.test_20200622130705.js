import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage.js';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage props = { ...mockProps}/>)
});

it('renders Mainpage without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})