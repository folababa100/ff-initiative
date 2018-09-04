import React from 'react';
import SellDesign from '../../components/SellDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<SellDesign/>);
  expect(wrapper).toMatchSnapshot()
})
