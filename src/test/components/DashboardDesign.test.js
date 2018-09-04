import React from 'react';
import { shallow } from "enzyme";
import DashboardDesign from '../../components/DashboardDesign';

test('should correctly render component correctly', () => {
  const wrapper = shallow(<DashboardDesign/>);
  expect(wrapper).toMatchSnapshot();
})

