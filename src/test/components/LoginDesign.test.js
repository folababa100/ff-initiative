import React from 'react';
import LoginDesign from '../../components/LoginDesign';
import { shallow } from "enzyme";

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginDesign />);
  expect(wrapper).toMatchSnapshot();
});
