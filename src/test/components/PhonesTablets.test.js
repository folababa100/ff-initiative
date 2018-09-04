import React from 'react';
import { shallow } from "enzyme";
import PhonesTablets from '../../components/PhonesTablets';

test('should render component correctly', () => {
  const wrapper = shallow(<PhonesTablets/>);
  expect(wrapper).toMatchSnapshot()
})
