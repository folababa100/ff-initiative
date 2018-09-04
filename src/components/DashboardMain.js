import React from 'react';
import { connect } from "react-redux";
import DashboardItem from './DashboardItem';
import selectProduct from '../selectors/products'

export const DashboardMain = (props) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="mt-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {
                    props.products.length === 0 ? (
                      <p>No products available yet</p>
                    ) : (
                        props.products.map((product) => {
                          return <DashboardItem key={product.id} {...product} />
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

const mapStateToProps = (state) => {
  return {
    products: selectProduct(state.products, state.filters)
  }
}

export default connect(mapStateToProps)(DashboardMain);
