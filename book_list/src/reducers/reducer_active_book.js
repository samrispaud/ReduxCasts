// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {

  console.log('Reducer for ActiveBook', action, state);

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

    case 'CHANGE_PERCENT_READ':
      return {...action.payload};
  }

  return state;
}
