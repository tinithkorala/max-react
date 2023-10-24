import React from 'react'

const CartProvider = (props) => {

  const addItemToCartHandler = (item) => {}

  const removeItemFromCartHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartProvider.Provider value={cartContext}>
      {props.children}
    </CartProvider.Provider>
  )
}

export default CartProvider