import React from 'react';
import Header from './Header';
import ContactDesign from './ContactDesign';
import DashboardFooter from './DashboardFooter'

const ContactPage = () => {
  return (
    <div className="back-color">
      <Header />
      <ContactDesign />
      <DashboardFooter/>
    </div>
  )
}

export default ContactPage;
