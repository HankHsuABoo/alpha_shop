import { useState } from "react"

import {products} from "../../../data/productData"
import CartItem from "../CartItem/CartItem.jsx"
import ShippingPrice from "../ShippingPrice/ShippingPrice.jsx"
import TotalPrice from "../TotalPrice/TotalPrice.jsx"
import styles from "./Cart.module.css"

export default function Cart() {
  const [cartItemList, setCartItemList] = useState(products)
  function handlePlusAmount(targetId){
    setCartItemList(
      cartItemList.map((product) => {
        if (product.id === targetId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        } else {
          return product;
        }
      })
    )
  }
  function handleMinusAmount(targetId){
    let newItemList = cartItemList.map((product) => {
      if (product.id === targetId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        }
      } else {
        return product;
      }
    });
    setCartItemList(
      newItemList.filter((item) => item.quantity > 0)
    );
  }
  //還未加上算運費的邏輯
  let price = 0
  cartItemList.forEach(item => {
    price = price + item.price * item.quantity
  })


  return (
    <div className ={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        {cartItemList.map(product => <CartItem key={product.id} product={product} onMinusAmount={handleMinusAmount} onPlusAmount={handlePlusAmount}/>)} 
        <ShippingPrice/>  
        <TotalPrice totalPrice={price}/>
    </div>
  )
}