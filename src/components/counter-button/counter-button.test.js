import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import CounterButton from './counter-button.component';

describe('CounterButton component', () => {
  const mockColor = 'purple';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  it('expect to render CounterButton component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('correctly incrememts the number onClick', () => {
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('purple');
  });
});
