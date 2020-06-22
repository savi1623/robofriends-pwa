import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card component', () => {
  expect(shallow(<CardList />)).toMatchSnapshot();
});
