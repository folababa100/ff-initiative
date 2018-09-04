import React from 'react';
import LocatorDesign from '../../components/LocatorDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<LocatorDesign/>);
  expect(wrapper).toMatchSnapshot()
})
