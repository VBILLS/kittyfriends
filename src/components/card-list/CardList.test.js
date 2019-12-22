import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import CardList from './CardList';

describe('it should render shallow snapshot', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ];
  it('matches react-test-renderer snapshot', () => {
    const component = renderer.create(<CardList robots={mockRobots} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('shallow renders & matches snapshot with enzyme', () => {
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
