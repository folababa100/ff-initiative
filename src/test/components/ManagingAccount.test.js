import React from 'react';
import { shallow } from "enzyme";
import ManagingAccount from '../../components/ManagingAccount'

test('should render component correctly', () => {
  const wrapper = shallow(<ManagingAccount/>)
  expect(wrapper).toMatchSnapshot()
})
