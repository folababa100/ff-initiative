import React from 'react';
import CartDesign from '../../components/CartDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<CartDesign/>);
  expect(wrapper).toMatchSnapshot()
})
