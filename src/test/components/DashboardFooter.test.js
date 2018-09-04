import React from 'react';
import { shallow } from "enzyme";
import DashboardFooter from '../../components/DashboardFooter';

test('should render component correctly', () => {
  const wrapper = shallow(<DashboardFooter/>);
  expect(wrapper).toMatchSnapshot();
})

