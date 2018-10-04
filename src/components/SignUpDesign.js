import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUpDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  signUpUser(e) {
    e.preventDefault()

    const email = this.refs.email.value.trim();
    const phoneNumber = this.refs.phoneNumber.value.trim();
    const fullName = this.refs.fullName.value.trim();
    const password = this.refs.password.value.trim();

      this.props.signUp({
        email, password, phoneNumber, fullName
      }, function (error, res) {
        if (error) {
          console.error(error)
        } else {
          console.log(res);
        }
      });
  }
  render() {
    return (
      <div className="box-layout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="card card--adjust">
                <div className="card-body text-center">
                  <h1>Sign Up</h1>
                  <form className="mt-4" onSubmit={this.signUpUser.bind(this)}>
                    <button className="my-btn btn btn-block btn-primary">
                      <i className="mr-5 icon ion-social-facebook"></i>
  
                      Sign in with Facebook
                    </button>
                    <button className="btn btn-block my-btn-danger btn-danger mb-2">
                      <i className=" mr-5 icon ion-social-google"></i>
  
                      Sign in with Google
                    </button>
                    <h1>Or</h1>
                    <div className="form-group">
                      <input ref="fullName" type="text" className="form-control" placeholder="Enter Full Name"/>
                    </div>
                    <div className="form-group">
                      <input ref="email" type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <input ref="phoneNumber" placeholder="Enter phone number" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input ref="password" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button className="my-btn btn bb btn-primary btn-block">Submit</button>
                  </form>
                  <div className="row">
                    <div className="col-12" style={{ textAlign: 'center' }}>
                      <Link to="/login">Have an account?</Link>
                    </div>
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

export default SignUpDesign;
