import {products} from "../../../data/productData"
import CartItem from "../CartItem/CartItem.jsx"
import ShippingPrice from "../ShippingPrice/ShippingPrice.jsx"
import TotalPrice from "../TotalPrice/TotalPrice.jsx"
import styles from "./Cart.module.css"

export default function Cart() {
  return (
    <div className ={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        {products.map(product => <CartItem key={product.id} product={product}/>)} 
        <ShippingPrice/>  
        <TotalPrice/>
    </div>
  )
}