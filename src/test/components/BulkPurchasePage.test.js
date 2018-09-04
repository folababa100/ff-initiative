import React from 'react';
import BulkPurchasePage from '../../components/BulkPurchasePage';
import { shallow } from "enzyme";

test('should render component correctly', () => {
  const wrapper = shallow(<BulkPurchasePage/>);
  expect(wrapper).toMatchSnapshot();
})
