import { addProduct, removeProduct, editProduct } from "../../actions/products";

test('should add products with default values', () => {
  const action = addProduct()
  expect(action).toEqual({
    type: 'ADD_PRODUCTS',
    product: {
      id: expect.any(String),
      name: '',
      description: '',
      seller: '',
      price: 0,
      createdAt: 0
    }
  })
})

test('should add products with provided values', () => {
  const productData = {
    name: 'Samsung',
    description: 'Smartphone',
    seller: 'Ade',
    price: 100,
    createdAt: 100
  }
  const action = addProduct(productData);
  expect(action).toEqual({
    type: 'ADD_PRODUCTS',
    product: {
      ...productData,
      id: expect.any(String)
    }
  })
})

test('should remove products with provided id', () => {
  const action = removeProduct({ id: 'abc134' });
  expect(action).toEqual({
    type: 'REMOVE_PRODUCTS',
    id: 'abc134'
  })
})

test('should edit value with changed values', () => {
  const action = editProduct('123abc', { description: 'It an infinix' });
  expect(action).toEqual({
    type: 'EDIT_PRODUCTS',
    id: '123abc',
    updates: {
      description: 'It an infinix'
    }
  })
})
