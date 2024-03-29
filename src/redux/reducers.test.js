import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });
  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual({ searchField: 'abc' });
  });
});

describe('request Robots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: []
  };
  it('should return initialstate', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });
  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });
  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }
      ],
      isPending: false
    });
  });
  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOO!'
      })
    ).toEqual({
      error: 'NOOOO!',
      robots: [],
      isPending: false
    });
  });
});
