import React from 'react';
import { data } from "../data/filter";

export default class PhonesTablets extends React.Component {
  render() {
    const listItems = data.map((d) => <li key={d.id} className="nav-link white-color-text">{d.name}</li>)
    return (
      <div className="front">
        <div onMouseLeave={() => this.props.updateText(false)} className="butercup container">
          <div className="row">
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr />
                {listItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
