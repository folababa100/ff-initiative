import React from 'react';
import { connect } from 'react-redux';

export const SignUpDesign = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card card--adjust">
              <div className="card-body text-center">
                <h1>Sign Up</h1>
                <form className="mt-4">
                  <button className="btn btn-block btn-primary">
                    <i className="mr-5 icon ion-social-facebook"></i>

                    Sign in with Facebook
                  </button>
                  <button className="btn btn-block btn-danger mb-2">
                    <i className=" mr-5 icon ion-social-google"></i>

                    Sign in with Google
                  </button>
                  <h1>Or</h1>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input placeholder="Enter phone number" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button className="btn bb btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignUpDesign;
