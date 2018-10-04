import axios from 'axios';
// import { FETCH_PRODUCTS } from "./types";

export function getAllProducts() {
  return function (dispatch) {
    dispatch({type: 'FETCH_ALL_REQUESTS'});
    // axios.defaults.headers.common['x-auth'] = localStorage.getItem('token');
    axios.get('http://localhost:3001/products')
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'FETCH_ALL_PRODUCTS',
          payload: response.data.products,
        });
      })
      .catch((e) => {
        console.log(e)
      })
  };
}

export const addProduct = (
  {
    name = '',
    description = '',
    seller = '',
    price = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_PRODUCTS',
  product: {
    name,
    description,
    seller,
    price,
    createdAt
  }
})

export const removeProduct = ({ id } = {}) => ({
  type: 'REMOVE_PRODUCTS',
  id
})

export const editProduct = (id, updates) => ({
  type: 'EDIT_PRODUCTS',
  id,
  updates
})
