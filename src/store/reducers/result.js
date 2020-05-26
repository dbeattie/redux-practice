import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
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
}

export default reducer;