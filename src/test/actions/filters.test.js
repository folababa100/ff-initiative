import { setTextFilter, sortByDate, sortByTitle } from "../../actions/filters";

test('should setup set text filter action with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should setup set text filter with provided ', () => {
  const text = 'some';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate by sortByDate', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
})

test('should generate by sortByTitle', () => {
  expect(sortByTitle()).toEqual({ type: 'SORT_BY_TITLE' })
})
