const initialState = {
  electronics: [
    {name: 'Computer', quantity: 10},
    {name: 'TV', quantity: 20},
    {name: 'Phone', quantity: 30}
  ],
  totalQuantity: 60,
};

function quantityReducer(state = initialState, action) {
  let {type, payload } = action
  switch(type){
    case 'INCREMENT':
      return {
        ...state,
        electronics: state.electronics.map(electronics => {
          if(electronics.name === payload.name){
            return {
              name: electronics.name, 
              quantity: electronics.quantity + 1 
            }
          }
          return electronics
        }),
        totalQuantity: state.totalQuantity + 1,
      }

    case 'DECREMENT':
      return {
        ...state,
        electronics: state.electronics.map(electronics => 
          electronics.name === payload.name ? 
          {name: electronics.name, quantity: electronics.quantity - 1} : 
          electronics),
        totalQuantity: state.totalQuantity - 1,
      }

    case 'RESET':
      return initialState;

    default:
      return state
  }
}

export const incrementCount = (electronics) => {

  return {
    type: 'INCREMENT',
    payload: electronics,
  }
};

export const decrementCount = (electronics) => {

  return{
    type: 'DECREMENT',
    payload: electronics,
  }
}

export const reset = () => {

  return {type: 'RESET'}
}

export default quantityReducer;