import React, { Component } from 'react';

class LoginDesign extends Component {
  loginUser(e) {
    e.preventDefault()

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    this.props.loginUser({
      email, password,
    }, function (err, res) {
      if (err) {
        console.error('loginUser: ', err)
      } else {
        console.log('loginUser: ', res);
      }
    });
  }
  render() {
    return (
      <div className="box-layout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Login</h3>
                  <form className="mt-4" onSubmit={this.loginUser.bind(this)}>
                    <div className="form-group">
                      <label htmlFor="Email1">Email address</label>
                      <input ref="email" placeholder="Enter your email" id="Email1" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Password1">Password</label>
                      <input ref="password" placeholder="Enter your password" id="Password1" type="password" className="form-control" />
                    </div>
                    <button className="btn btn-primary btn-block">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginDesign;
