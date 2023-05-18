import { useContext, useState } from 'react';

import { products } from "../data/productData"
import { CartContext } from './CartContext.js'; 
import { FormContext } from './FormContext.js';

export default function CartContextProvider ({children}) {
  const [cartItemList, setCartItemList] = useState(products)
  const {deliveryPrice} = useContext(FormContext)
  const totalPrice = cartItemList.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  const finalPrice = deliveryPrice !== "免費" ? totalPrice + deliveryPrice : totalPrice;

  const value = {
    cartItemList,
    finalPrice,
    onCartItemChange: setCartItemList
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}