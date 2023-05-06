import styles from "./TotalPrice.module.css"

export default function TotalPrice() {
  return(
    <div className={styles.totalPriceContainer}>
      <div className={styles.totalPriceTitle}>小計</div> 
      <div className={styles.totalPrice}>$5298</div>
    </div>
  )
}