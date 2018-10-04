import React from 'react';

const ContactDesign = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <h3 className="text-center mb-5 mt-5">Contact Us</h3>
              <hr className="mb-5" />
              <div className="row">
                <div className="col-7">
                  <form>
                    <em>All fields are required</em>
                    <div className="row mt-4">
                      <div className="col-6">
                        <div className="form-group">
                          <input type="text" placeholder="Full Names" className="form-control reset-contact-form" />
                        </div>
                        <div className="form-group">
                          <input type="email" placeholder="Email address" className="form-control reset-contact-form" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input type="number" placeholder="Phone Numbers" className="form-control reset-contact-form" />
                        </div>
                        <div className="form-group">
                          <select className="form-control reset-contact-form">
                            <option value="date">By Date</option>
                            <option value="title">By Title</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <textarea placeholder="Message" className="form-control reset-contact-form" cols="30" rows="10"></textarea>
                    <button className="my-btn btn btn-block btn-lg mt-4" style={{ borderRadius: '0' }}>Submit</button>
                  </form>
                </div>
                <div className="col-5">
                  <h3>Phone support</h3>

                  <h4>07000000000</h4>
                  <p>07000000000</p>
                  <p>07000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDesign;
