import React from 'react';
import CartDesign from './CartDesign';
import Header from './Header';
import DashboardFooter from './DashboardFooter';

const CartPage = () => {
  return (
    <div className="back-color">
      <Header/>
      <CartDesign/>
      <DashboardFooter/>
    </div>
  )
}

export default CartPage;
