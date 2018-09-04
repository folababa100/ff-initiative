const defaultState = {
  token: localStorage.getItem('token')
}

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN':
    return Object.assign({}, state, {
      token: action.payload.data.tokens[0].token
    })
    default:
      return state;
  }
}