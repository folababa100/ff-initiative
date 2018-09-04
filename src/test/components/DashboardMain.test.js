import React from 'react';
import { shallow } from "enzyme";
import {DashboardMain} from '../../components/DashboardMain';
import products from '../fixtures/products';

test('should render component correctly with list of products', () => {
  const wrapper = shallow(<DashboardMain products={products}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render component with empty products', () => {
  const wrapper = shallow(<DashboardMain products={[]}/>)
  expect(wrapper).toMatchSnapshot()
})

