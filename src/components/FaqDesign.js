import React from 'react';
import YourOrder from './YourOrder';
import ManagingAccount from "./ManagingAccount";
import PayingOptions from './PayingOptions';
import Coupons from './Coupons';

export default class FaqDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showYourOrder: true,
      showManagingAccount: false,
      showPayingOptions: false,
      showCoupons: false
    }
  }
  renderComponent() {
    if (this.state.showYourOrder === true) {
      return <YourOrder/>
    } else if (this.state.showManagingAccount === true) {
      return <ManagingAccount/>
    } else if (this.state.showPayingOptions === true) {
      return <PayingOptions/>
    } else if (this.state.showCoupons === true) {
      return <Coupons/>
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mt-5 mb-5">
                <div className="card-body">
                  <h3 className="text-center">Frequently Asked Questions</h3>
                  <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae doloremque molestias repellendus totam minus deleniti omnis consequatur? Alias voluptates, fuga eaque a doloremque architecto vero repudiandae nam similique fugit.</p>
                  <hr className="hr" />
                  <div className="row">
                    <div className="col-3">
                      <div className="row active-faq" onClick={() => this.setState({ showYourOrder: true, showManagingAccount: false, showCoupons: false, showPayingOptions: false })}>
                        <div className="col-5">
                          <img width="100" height="100" src="/images/shutterstock-318359918.png" alt=" " />
                        </div>
                        <div className="col-7">
                          <h4 className="h4">Your Order</h4>
                          <p className="faq-p">Buy things, Track, Delivery time, return.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row active-faq" onClick={() => this.setState({ showManagingAccount: true, showYourOrder: false, showCoupons: false, showPayingOptions: false })}>
                        <div className="col-5">
                          <img width="100" height="100" src="/images/shutterstock-318359918.png" alt=" " />
                        </div>
                        <div className="col-7">
                          <h4 className="h4">Managing Account</h4>
                          <p className="faq-p">Edit login, name, mobile number & delivery address</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row active-faq" onClick={() => this.setState({ showPayingOptions: true, showManagingAccount: false, showYourOrder: false, showCoupons: false })}>
                        <div className="col-5">
                          <img width="100" height="100" src="/images/shutterstock-318359918.png" alt=" " />
                        </div>
                        <div className="col-7">
                          <h4 className="h4">Payment Options</h4>
                          <p className="faq-p">Edit shipping address for delivery of orders</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row active-faq" onClick={() => this.setState({ showCoupons: true, showManagingAccount: false, showYourOrder: false, showPayingOptions: false })}>
                        <div className="col-5">
                          <img width="100" height="100" src="/images/shutterstock-318359918.png" alt=" " />
                        </div>
                        <div className="col-7">
                          <h4 className="h4">Gift Vouchers/Coupon</h4>
                          <p className="faq-p">Edit shipping address for delivery of orders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="hr hr-adjust" />
                  {this.renderComponent()}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
