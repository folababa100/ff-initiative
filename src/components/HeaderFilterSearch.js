import React from 'react';
import PhonesTablets from './PhonesTablets';
import Fashion from './Fashion';
import HomeKitchen from './HomeKitchen';
import BabyKids from './BabyKids';
import WineOther from './WineOther';
import Electronics from './Electronics';
import ComputerAccessories from './ComputerAccessories';
import FlipMove from 'react-flip-move';

export default class HeaderFilterSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  }
  renderComponent() {
    if (this.state.show === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <PhonesTablets />
          </div>
        </div>
      )
    } else if (this.state.show1 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show1: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <ComputerAccessories />
          </div>
        </div>
      )
    } else if (this.state.show2 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show2: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <Electronics />
          </div>
        </div>
      )
    } else if (this.state.show3 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show3: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <Fashion />
          </div>
        </div>
      )
    } else if (this.state.show4 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show4: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <BabyKids />
          </div>
        </div>
      )
    } else if (this.state.show5 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show5: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <HomeKitchen />
          </div>
        </div>
      )
    } else if (this.state.show6 === true) {
      return (
        <div className="front">
          <div onMouseLeave={() => {
            this.setState({ show6: false })
            document.querySelector('.navQuery').style.display = 'none'
          }} id="butercup" className="navQuery container butercup">
            <WineOther />
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-adjust navbar-expand-lg navbar-dark snorkel-blue nav-border">
          <div className="container">
            <div className="row">
              <div className="auto-auto">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li onMouseEnter={() => this.state.show === false ? this.setState({ show: true, show1: false, show2: false, show3: false, show4: false, show5: false, show6: false }) : this.setState({ show: false, show1: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item">
                      {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                      <div className="nav-link cursor">Phones & Tablets</div>
                    </li>
                    <li onMouseEnter={() => this.state.show1 === false ? this.setState({ show1: true, show: false, show2: false, show3: false, show4: false, show5: false, show6: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Computer & Accessories</div>
                    </li>
                    <li onMouseEnter={() => this.state.show2 === false ? this.setState({ show2: true, show: false, show1: false, show3: false, show4: false, show5: false, show6: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Electronics</div>
                    </li>
                    <li onMouseEnter={() => this.state.show3 === false ? this.setState({ show3: true, show: false, show2: false, show1: false, show4: false, show5: false, show6: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Fashion</div>
                    </li>
                    <li onMouseEnter={() => this.state.show5 === false ? this.setState({ show5: true, show: false, show2: false, show3: false, show4: false, show1: false, show6: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Home & Kitchen</div>
                    </li>
                    <li onMouseEnter={() => this.state.show4 === false ? this.setState({ show4: true, show: false, show2: false, show3: false, show1: false, show5: false, show6: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Baby, Kids & Toys</div>
                    </li>
                    <li onMouseEnter={() => this.state.show6 === false ? this.setState({ show6: true, show: false, show2: false, show3: false, show4: false, show5: false, show1: false }) : this.setState({ show1: false, show: false, show2: false, show3: false, show4: false, show5: false, show6: false })} className="nav-item ml-6">
                      <div className="nav-link cursor">Wine & Other Categories</div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <FlipMove enterAnimation="elevator" leaveAnimation="fade">
          {this.renderComponent()}
        </FlipMove>
      </div>
    )
  }
}
