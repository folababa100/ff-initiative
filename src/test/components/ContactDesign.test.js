import React from 'react';
import ContactDesign from '../../components/ContactDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<ContactDesign/>);
  expect(wrapper).toMatchSnapshot();
})

