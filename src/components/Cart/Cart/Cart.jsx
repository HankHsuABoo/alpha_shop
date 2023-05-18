import { useContext } from 'react';

import CartItem from "../CartItem/CartItem.jsx"

import { CartContext } from "../../../context/CartContext.js"
import { FormContext } from '../../../context/FormContext.js';
import styles from "./Cart.module.css"

export default function Cart() {
  const {cartItemList, onCartItemChange, finalPrice} = useContext(CartContext)
  const {deliveryPrice} = useContext(FormContext)
  
  function handleAmount(targetId, action) {
    let newItemList = cartItemList.map((product) => {
      if (product.id === targetId) {
        return {
          ...product,
          quantity: action === 'plus' ? product.quantity + 1 : product.quantity - 1,
        }
      } else {
        return product;
      }
    });

    if (action === 'minus') {
      newItemList = newItemList.filter((item) => item.quantity > 0);
    }

    onCartItemChange(newItemList);
  }
  
  

  return (
    <div className ={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
        {cartItemList.map(product => <CartItem key={product.id} product={product} onChangeAmount={handleAmount} />)} 
        <section  className={styles.cartInfoContainer}>
          <div className={styles.cartInfoTitle}>運費</div> 
          <div className={styles.cartInfoPrice}>${deliveryPrice}</div>
        </section>
        <section  className={styles.cartInfoContainer}>
          <div className={styles.cartInfoTitle}>小計</div> 
          <div className={styles.cartInfoPrice}>${finalPrice}</div>
        </section>
    </div>
  )
}