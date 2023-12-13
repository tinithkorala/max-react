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
      updatedItems.push({...action.payload, quantity: 1});
    }
    return {
      ...state,
      cart: updatedItems,
      totalQuantity: state.totalQuantity + 1
    }
  }
  if(action.type === 'REMOVE_ITEM') {
    const id = action.payload;
    const existingCartItemIndex = state.cart.findIndex(item => item.id === id);
    const existingCartItem = state.cart[existingCartItemIndex];
    const updatedItems = [...state.cart];

    if(existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    }else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      }
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      ...state,
      cart: updatedItems
    }
  }
  return state;
}

const store = createStore(cartReducer);

export default store;