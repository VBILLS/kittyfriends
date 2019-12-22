import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Card from './Card';

describe('Card component', () => {
  it('matches react-test-renderer snapshot', () => {
    const component = renderer.create(<Card />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('shallow renders & matches snapshot with enzyme', () => {
    const wrapper = shallow(<Card />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders props', () => {
    const mockProps = {
      name: 'VCunit',
      email: 'vonacunt@gmail.com'
    };
    const newWrapper = shallow(<Card {...mockProps} />);
    expect(toJson(newWrapper)).toMatchSnapshot();
  });
});
