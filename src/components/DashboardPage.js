import React from 'react';
import Header from "./Header";
import DashboardDesign from './DashboardDesign';
import DashboardFooter from './DashboardFooter';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <DashboardDesign />
      <DashboardFooter />
    </div>
  )
};

export default DashboardPage;
