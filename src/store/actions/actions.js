export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_FIVE = 'ADD_FIVE';
export const SUBTRACT_FIVE = 'SUBTRACT_FIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  }
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const addFive = (value) => {
  return {
    type: ADD_FIVE, 
    val: value
  }
};

export const subtractFive = (value) => {
  return {
    type: SUBTRACT_FIVE, 
    val: value
  }
};

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  }
};

export const destroyStoreResult = (resElId) => {
  return {
    type: DELETE_RESULT, 
    resultElementId: resElId
  }
};