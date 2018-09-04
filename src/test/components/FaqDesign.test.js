import React from 'react';
import FaqDesign from '../../components/FaqDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<FaqDesign/>);
  expect(wrapper).toMatchSnapshot();
})
