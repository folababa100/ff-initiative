import React from 'react';

export default class PhonesTablets extends React.Component {
  render() {
    const data = [
      { id: '1', name: 'Lorem' },
      { id: 2, name: 'Lorem' },
      { id: 3, name: 'Lorem' },
      { id: 4, name: 'Lorem' },
      { id: 5, name: 'Lorem' },
      { id: 6, name: 'Lorem' },
      { id: 7, name: 'Lorem' },
      { id: 8, name: 'Lorem' },
      { id: 9, name: 'Lorem' },
      { id: 10, name: 'Lorem' },
      { id: 11, name: 'Lorem' },
      { id: 12, name: 'Lorem' },
      { id: 13, name: 'Lorem' },
      { id: 14, name: 'Lorem' }
    ];
    const listItems = data.map((d) => <li key={d.id} className="nav-link white-color-text">{d.name}</li>)
    return (
      <div className="front">
        <div className="container butercup">
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
                <hr/>
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr/>
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr/>
                {listItems}
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="nav-link white-color-text font-weight-bold">Samsung</li>
                <hr/>
                {listItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
