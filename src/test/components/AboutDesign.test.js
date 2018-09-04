import React from 'react';
import { shallow } from "enzyme";
import AboutDesign from '../../components/AboutDesign';

test('should render component correctly', () => {
  const wrapper = shallow(<AboutDesign/>);
  expect(wrapper).toMatchSnapshot();
})
