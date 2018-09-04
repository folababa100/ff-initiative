import React from 'react';
import LocatorPage from '../../components/LocatorPage';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<LocatorPage/>);
  expect(wrapper).toMatchSnapshot()
})
