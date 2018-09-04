import React from 'react';
import Header from './Header';
import AboutDesign from './AboutDesign';
import DashboardFooter from './DashboardFooter';

const AboutPage = () => {
  return (
    <div className="back-color lay">
      <Header/>
      <AboutDesign/>
      <DashboardFooter/>
    </div>
  )
};

export default AboutPage;
