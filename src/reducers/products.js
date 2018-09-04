const productsReducerDefaultState = [
  { id: '1', name: 'Samsung S7', description: 'A sleek phone', seller: 'Adefolarin', price: 100, createdAt: 100 },
  { id: '2', name: 'Iphone X', description: 'An elegant phone', seller: 'Adefolarin', price: 120, createdAt: 120 },
  { id: '3', name: 'Lg G7', description: 'A smart phone', seller: 'Adefolarin', price: 90, createdAt: 90 },
  { id: '4', name: 'Lg G7', description: 'A smart phone', seller: 'Adefolarin', price: 90, createdAt: 90 },
  { id: '5', name: 'Lg G7', description: 'A smart phone', seller: 'Adefolarin', price: 90, createdAt: 90 },
  { id: '6', name: 'Lg G7', description: 'A smart phone', seller: 'Adefolarin', price: 90, createdAt: 90 },
  { id: '7', name: 'Lg G7', description: 'A smart phone', seller: 'Adefolarin', price: 90, createdAt: 90 }
];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [
        ...state,
        action.product
      ]
    case "REMOVE_PRODUCTS":
      return state.filter(({ id }) => id !== action.id)
    case "EDIT_PRODUCTS":
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            ...action.updates
          }
        } else {
          return product
        }
      })
    default:
      return state
  }
}
