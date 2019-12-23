import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainPage from './main-page.component';

describe('MainPage tests', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('renders mainpage without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'test@gmail.com'
        }
      ],
      searchField: 'john',
      isPending: false
    };
    const newWrapper = shallow(<MainPage {...mockProps2} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(newWrapper.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'test@gmail.com'
      }
    ]);
  });

  it('has isPending True with Loading...', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.exists('.loading')).toBe(true);
  });
});
