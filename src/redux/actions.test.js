import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField action', () => {
  it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots action', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  it('handles requestRobots api', () => {
    expect(action[0]).toEqual(expectedAction);
  });
  it('handles request robots success', () => {
    const mockData = [
      {
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }
    ];
    const expectedSuc = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockData
    };
    const rrs = Promise.resolve(expectedSuc);
    return expect(rrs).resolves.toBe(expectedSuc);
  });
  it('handles request failure', () => {
    const mockError = 'FAAILLL';
    const expectedFail = {
      type: REQUEST_ROBOTS_FAILED,
      payload: mockError
    };
    const rrf = Promise.reject(expectedFail);
    return expect(rrf).rejects.toBe(expectedFail);
  });
});

// export const requestRobots = () => dispatch => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };
