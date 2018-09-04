import React from 'react';
import SellPage from '../../components/SellPage';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<SellPage/>);
  expect(wrapper).toMatchSnapshot();
})
