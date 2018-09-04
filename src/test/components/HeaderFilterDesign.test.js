import React from 'react';
import HeaderFilterDesign from '../../components/HeaderFIlterDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<HeaderFilterDesign/>);
  expect(wrapper).toMatchSnapshot()
})
