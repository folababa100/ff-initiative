import axios from 'axios';

export const getAllProducts = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/products')
      .then((res) => {
        console.log(res)
        dispatch({
          type: '',
          payload: res.data.products
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
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
