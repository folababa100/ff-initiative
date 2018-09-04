import React from 'react';
import moment from 'moment'

const DashboardItem = ({ name, description, price, createdAt }) => {
  return (
    <div className="col-md-4">
      <div className="card card-hov cursor mt-4">
        <div className="card-body">
          <h5 className="h-5">{name}</h5>
          <p className="p">{description}</p>
          <p className="p">{moment(createdAt).format('MMMM Do YYYY')}</p>
          <h6 className="h-5">{price}</h6>
        </div>
      </div>
    </div>
  )
}

export default DashboardItem;
