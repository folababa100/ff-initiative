import React from 'react';
import CartPage from '../../components/CartPage';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<CartPage/>);
  expect(wrapper).toMatchSnapshot()
})
