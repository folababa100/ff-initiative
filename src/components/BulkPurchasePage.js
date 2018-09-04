import React from 'react';
import DashboardFooter from './DashboardFooter';
import BulkPurchaseDesign from './BulkPurchaseDesign';
import Header from './Header';

const BulkPurchasePage = () => {
  return (
    <div className="back-color">
      <Header />
      <BulkPurchaseDesign />
      <DashboardFooter />
    </div>
  )
}

export default BulkPurchasePage;
