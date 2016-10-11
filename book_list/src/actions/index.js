export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function changePercentRead(book, changeVal) {
  console.log('********************************');
  console.log('Before change, action creator');
  console.log(book, changeVal);
  book.percentRead += changeVal
  console.log('After change, action creator', book);
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'CHANGE_PERCENT_READ',
    payload: book
  };
}
