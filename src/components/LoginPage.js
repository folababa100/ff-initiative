import React from 'react';
import LoginDesign from './LoginDesign';
import { loginUser } from "../actions/auth";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const LoginPage = (props) => {
  return (
    <div>
      <LoginDesign
        loginUser={props.loginUser}
      />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser: loginUser,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);
