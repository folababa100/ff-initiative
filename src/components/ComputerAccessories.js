import React from 'react';
import { data } from '../data/filter'

export default class ComputerAccessories extends React.Component {
  render() {
    const listItems = data.map((d) => <li key={d.id} className="nav-link white-color-text">{d.name}</li>)
    return (
      <div className="row">
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="nav-link white-color-text font-weight-bold">Lenovo</li>
            <hr />
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}
