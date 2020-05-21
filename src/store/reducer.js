const initialState = {
  counter: 0
}


const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case 'INCREMENT':
      return {
            counter: state.counter + 1
          }
          case 'DECREMENT':
      return {
            counter: state.counter - 1
          }
          case 'ADD_FIVE':
      return {
        counter: state.counter + action.val
          }
          case 'SUBTRACT_FIVE':
      return {
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