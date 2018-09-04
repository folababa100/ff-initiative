import filterReducer from '../../reducers/filters';

test('should setup default filters', () => {
  const state = filterReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date'
  })
})

test('should setup with provided text value', () => {
  const text = 'This is my filter value';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text)
})

