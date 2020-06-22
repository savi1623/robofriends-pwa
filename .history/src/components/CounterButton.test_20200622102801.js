import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton.js';

it('expect to render card component', () => {
  const mockColor = 'blue';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});
