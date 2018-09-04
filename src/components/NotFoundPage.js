import React from 'react';
import Header from './Header';
import DashboardFooter from './DashboardFooter';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      {/* 404 - <Link to="/">Go home</Link> */}
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="adjust-height">
              <h3 className="text-center">Opps Error, Page not found.</h3>
              <Link to="/">
                <p className="text-center">Go Home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  )
};

export default NotFoundPage;
