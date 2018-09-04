import React from 'react';
import { shallow } from "enzyme";
import {SignUpDesign} from '../../components/SignUpDesign';

test('should correctly render component', () => {
  const wrapper = shallow(<SignUpDesign/>);
  expect(wrapper).toMatchSnapshot();
})

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<SignUpDesign startLogin={startLogin} />);
  wrapper.find('button.bb').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
