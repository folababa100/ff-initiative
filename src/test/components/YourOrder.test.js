import React from 'react';
import { shallow } from "enzyme";
import YourOrder from '../../components/YourOrder';

test('should render component correctly', () => {
  const wrapper = shallow(<YourOrder/>);
  expect(wrapper).toMatchSnapshot()
})
