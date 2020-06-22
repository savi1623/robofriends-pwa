import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage.js';

it('expect to render App component', () => {
  expect(shallow(<MainPage />)).toMatchSnapshot();
});
