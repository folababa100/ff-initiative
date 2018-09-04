import React from 'react';
import HeaderFilterSearch from '../../components/HeaderFilterSearch';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<HeaderFilterSearch/>);
  expect(wrapper).toMatchSnapshot()
})
