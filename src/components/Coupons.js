import React from 'react';

export default class Coupons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hideOne: false,
      hideTwo: false,
      hideThree: false,
      hideFour: false,
      hideFive: false,
      hideSix: false,
      hideSeven: false,
      hideEight: false,
      hideNine: false,
      hideTen: false,
      hideEleven: false,
      hideTwelve: false,
    }
  }
  hideSomeElement() {
    this.state.show === false ? this.setState({ show: true }) : this.setState({ show: false });
  }
  hideTwo() {
    this.state.hideTwo === false ? this.setState({ hideTwo: true }) : this.setState({ hideTwo: false });
  }
  hideThree() {
    this.state.hideThree === false ? this.setState({ hideThree: true }) : this.setState({ hideThree: false });
  }
  hideFour() {
    this.state.hideFour === false ? this.setState({ hideFour: true }) : this.setState({ hideFour: false });
  }
  hideFive() {
    this.state.hideFive === false ? this.setState({ hideFive: true }) : this.setState({ hideFive: false });
  }
  hideSix() {
    this.state.hideSix === false ? this.setState({ hideSix: true }) : this.setState({ hideSix: false });
  }
  hideSeven() {
    this.state.hideSeven === false ? this.setState({ hideSeven: true }) : this.setState({ hideSeven: false });
  }
  hideEight() {
    this.state.hideEight === false ? this.setState({ hideEight: true }) : this.setState({ hideEight: false });
  }
  hideNine() {
    this.state.hideNine === false ? this.setState({ hideNine: true }) : this.setState({ hideNine: false });
  }
  hideTen() {
    this.state.hideTen === false ? this.setState({ hideTen: true }) : this.setState({ hideTen: false });
  }
  hideEleven() {
    this.state.hideEleven === false ? this.setState({ hideEleven: true }) : this.setState({ hideEleven: false });
  }
  hideTwelve() {
    this.state.hideTwelve === false ? this.setState({ hideTwelve: true }) : this.setState({ hideTwelve: false });
  }
  hideOne() {
    this.state.hideOne === false ? this.setState({ hideOne: true }) : this.setState({ hideOne: false });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.hideSomeElement()} className="faq-btn btn btn-lg">Show All Answers</button>
        <div id="k" className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h5 className="mb-5">Coupons</h5>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p onClick={() => this.hideOne()}>How do I buy things (Shop) on Konga?</p>
                    {
                      this.state.show === true || this.state.hideOne === true ? (
                        <p id="hideOne" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideTwo()}>Can I buy in bulk?</p>
                    {
                      this.state.show === true || this.state.hideTwo === true ? (
                        <p id="hideTwo" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideThree()}>Why do I see different prices for the same product?</p>
                    {
                      this.state.show === true || this.state.hideThree === true ? (
                        <p id="hideThree" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideFour()}>How do I save items to view later?</p>
                    {
                      this.state.show === true || this.state.hideFour === true ? (
                        <p id="hideFour" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideFive()}>What is buyer protection?</p>
                    {
                      this.state.show === true || this.state.hideFive === true ? (
                        <p id="hideFive" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideSix()}>What is the estimated delivery time? When can I expect my order to arrive?</p>
                    {
                      this.state.show === true || this.state.hideSix === true ? (
                        <p id="hideSix" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideSeven()}>Why does the estimated delivery time vary?</p>
                    {
                      this.state.show === true || this.state.hideSeven === true ? (
                        <p id="hideSeven" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideEight()}>Who will deliver my Order?</p>
                    {
                      this.state.show === true || this.state.hideEight === true ? (
                        <p id="hideEight" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideNine()}>Will all of the items in my order arrive in a single package?</p>
                    {
                      this.state.show === true || this.state.hideNine === true ? (
                        <p id="hideNine" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideTen()}>My order is shipped. How can I track it?</p>
                    {
                      this.state.show === true || this.state.hideTen === true ? (
                        <p id="hideTen" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideEleven()}>How do I cancel an order?</p>
                    {
                      this.state.show === true || this.state.hideEleven === true ? (
                        <p id="hideEleven" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                    <p onClick={() => this.hideTwelve()}>How can I view and print the invoice for an order?</p>
                    {
                      this.state.show === true || this.state.hideTwelve === true ? (
                        <p id="hideTwelve" className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo nobis, reiciendis laborum dolore.</p>
                      ) : (
                          <div></div>
                        )
                    }
                    <hr className="hr hr-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
