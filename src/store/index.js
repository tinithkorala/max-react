import {createStore} from 'redux';

const initialState = {
  cart: [],
  totalQuantity: 0
}

const cartReducer = (state = initialState, action) => {
  if(action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
    const updatedItems = [...state.cart];
    if(existingCartItemIndex > -1) {
      const existingCartItem = state.cart[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1
      }
      updatedItems[existingCartItemIndex]  = updatedItem;
    }else {
      updatedItems.push({...action.payload});
    }
    return {
      ...state,
      cart: updatedItems,
      totalQuantity: state.totalQuantity + 1
    }
    // console.log(action.payload);
    // return {
    //   ...state,
    //   items: action.payload
    // }
  }
  // if(action.type === 'REMOVE_ITEM') {

  // }
  return state;
}

const store = createStore(cartReducer);

export default store;