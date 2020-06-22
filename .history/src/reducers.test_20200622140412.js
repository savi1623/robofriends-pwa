import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers.js';

describe('searchRobots', () => {
  const initialState = {
    searchField: '',
  };
  it(' should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it(' should handle the change search field', () => {
    expect(
      reducers.searchRobots(initialState, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc',
      })
    ).toEqual({
      searchField: 'abc',
    });
  });
});
