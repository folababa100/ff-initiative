import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { setTextFilter } from '../actions/filters';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderFilterDesign extends Component {
  onButtonChange(e) {
    e.preventDefault()
    const text = this.refs.text.value.trim()
    this.props.setTextFilter(text)
  }
  onTextChange(e) {
    this.props.setTextFilter(e.target.value)
  }
  render() {
    return (
      <div className="white-color">
        <nav className="navbar navbar-adjust-all navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="aa navbar-brand brand-adjust" to="/">
              <img width="50" height="70" src="/images/fola-logo.png" className="d-inline-block align-top" alt="FF-Initiative Logo" />
              FF-Initiative
            </NavLink>
            <form className="mr-4 flex reset-search">
              <input type="search" className="reset-form reset-form-radius" onChange={this.onTextChange.bind(this)} value={this.props.filters.text} ref="text" placeholder="Search Products" />
              <button className="my-btn btn reset-btn" onClick={this.onButtonChange.bind(this)}>
                <i className="ion-ios-search"></i>
              </button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item flex">
                <i className="ion-android-favorite-outline x3"></i>
                <NavLink to="/like" className="nav-link line-adjust">Liked Items</NavLink>
              </li>
              <li className="nav-item flex">
                <i className="ion-ios-cart-outline x3"></i>
                <NavLink to="/cart" className="nav-link line-adjust">Cart</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
})

HeaderFilterDesign.propTypes = {
  setTextFilter: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilterDesign)
