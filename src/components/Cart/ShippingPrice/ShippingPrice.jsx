import styles from "./Shipping.module.css"

export default function ShippingPrice() {
  return(
    <div className={styles.shippingPriceContainer}>
      <div className={styles.shippingPriceTitle}>運費</div> 
      <div className={styles.shippingPrice}>免費</div>
    </div>
  )
}