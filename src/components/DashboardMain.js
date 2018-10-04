import React from 'react';
import { connect } from "react-redux";
import { getAllProducts } from "../actions/products";
import DashboardItem from './DashboardItem';
import selectProducts from '../selectors/products';
import { Helmet } from 'react-helmet';
// import selectProduct from '../selectors/products';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export class DashboardMain extends React.Component {
  componentWillMount() {
    this.props.getAllProducts()
    console.log(this.props.getAllProducts())
  }
  render() {
    return (
      <main className="container">
      <Helmet>
        <title>FF-Inititative || Seller</title>
      </Helmet>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="mt-4">
              <div className="card">
                <div className="card-body" style={{ minHeight: '100vh' }}>
                  <div className="row">
                    {
                      this.props.products.length === 0 ? (
                        <p>No products available yet</p>
                      ) : (
                          this.props.products.map((product) => {
                            return <DashboardItem key={product._id} {...product} />
                          })
                        )
                    }
                    <div className="fixed-action">
                      <button style={{ outline: 'none' }} className="btn-floating">
                        <i className="ion-edit"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllProducts: getAllProducts,
  }, dispatch);
}

DashboardMain.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: selectProducts(state.products, state.filters)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(DashboardMain);
