import React from 'react';
import {HeaderDesign} from '../../components/HeaderDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<HeaderDesign/>);
  expect(wrapper).toMatchSnapshot()
})
