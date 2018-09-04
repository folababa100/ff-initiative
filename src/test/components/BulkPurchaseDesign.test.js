import React from 'react';
import BulkPurchaseDesign from '../../components/BulkPurchaseDesign';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<BulkPurchaseDesign/>);
  expect(wrapper).toMatchSnapshot();
})
