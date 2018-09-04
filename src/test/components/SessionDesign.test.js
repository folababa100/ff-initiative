import React from 'react';
import { shallow } from "enzyme";
import SessionDesign from '../../components/SessionDesign';

test('should render component correctly', () => {
  const wrapper = shallow(<SessionDesign/>);
  expect(wrapper).toMatchSnapshot();
})
