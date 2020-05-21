const initialState = {
  counter: 0,
  results: []
}


const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD_FIVE':
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'SUBTRACT_FIVE':
      return {
        ...state,
        counter: state.counter - action.val
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case 'DELETE_RESULT':
      //METHOD 1 for removing something from an Array immutably
      // const id = 2;
      // const newArr = [...state.results]
      // newArray.slice(id, 1)
      
      //METHOD 2 filter method
      const updatedArr = state.results.filter(result => result.id !== action.resultElementId);
      return {
        ...state,
        results: updatedArr
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