import React from 'react';
import ReturnPolicyDesign from '../../components/ReturnPolicyDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<ReturnPolicyDesign/>);
  expect(wrapper).toMatchSnapshot();
})
