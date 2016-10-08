export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function changePercentRead(book, changeVal) {
  console.log(book, changeVal);
  book.percentRead += changeVal
  book.title += "*"
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'CHANGE_PERCENT_READ',
    payload: book
  };
}
