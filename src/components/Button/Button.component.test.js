import React from 'react';
import Button from './Button.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should trigger onClick on button press', () => {
    const wrapper = shallow(<Button onClick={jest.fn()} caption ={"Ayushi"}></Button>);
    wrapper.find('button').simulate('click');
    expect(wrapper.props().onClick).toHaveBeenCalled();
  })
});