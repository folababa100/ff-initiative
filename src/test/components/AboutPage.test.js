import React from 'react';
import { shallow } from "enzyme";
import AboutPage from '../../components/AboutPage';

test('should correctly render component', () => {
  const wrapper = shallow(<AboutPage/>);
  expect(wrapper).toMatchSnapshot()
})

