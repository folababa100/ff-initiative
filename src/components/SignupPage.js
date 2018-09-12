import React, { Component } from 'react';
import SignUpDesign from './SignUpDesign';
import { connect } from "react-redux";
import { signUp } from '../actions/auth';
import { bindActionCreators } from 'redux';

class SignupPage extends Component {
  onSubmit = (user) => {
    this.props.signUp(user);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <SignUpDesign
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUp: signUp,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignupPage);
