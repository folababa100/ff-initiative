import React from 'react';
import { shallow } from "enzyme";
import SignupPage from '../../components/SignupPage';

test('should correctly render component', () => {
  const wrapper = shallow(<SignupPage/>);
  expect(wrapper).toMatchSnapshot()
})

