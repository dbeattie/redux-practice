import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0
}

//FIX actionTypes to new constants
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD_FIVE:
      return {
        ...state,
        counter: state.counter + action.val
      }
    case actionTypes.SUBTRACT_FIVE:
      return {
        ...state,
        counter: state.counter - action.val
      }
  }
  return state;
};

//IF STATEMENT ALTERNATIVE
// if (action.type === 'INCREMENT') {
//   return {
//     counter: state.counter + 1
//   }
// }
// if (action.type === 'DECREMENT') {
//   return {
//     counter: state.counter - 1
//   }
// }
// if (action.type === 'ADD_FIVE') {
//   return {
//     counter: state.counter + action.val
//   }
// }
// if (action.type === 'SUBTRACT_FIVE') {
//   return {
//     counter: state.counter - action.val
//   }
// }
// return state;


export default reducer;