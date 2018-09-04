import React from 'react';
import Faq from '../../components/Faq';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<Faq/>);
  expect(wrapper).toMatchSnapshot();
})
