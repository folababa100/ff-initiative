import React from 'react';
import ReturnPolicy from '../../components/ReturnPolicy';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<ReturnPolicy/>)
  expect(wrapper).toMatchSnapshot()
})
