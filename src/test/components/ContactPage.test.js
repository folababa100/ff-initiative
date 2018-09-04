import React from 'react';
import ContactPage from '../../components/ContactPage';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<ContactPage/>);
  expect(wrapper).toMatchSnapshot();
})

