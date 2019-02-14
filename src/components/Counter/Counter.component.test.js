import React from 'react';
import Counter from './Counter.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('Counter', () => {
  it('should render a Counter', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});