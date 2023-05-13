import styles from "./TotalPrice.module.css"

export default function TotalPrice({totalPrice}) {
  return(
    <div className={styles.totalPriceContainer}>
      <div className={styles.totalPriceTitle}>小計</div> 
      <div className={styles.totalPrice}>{totalPrice}</div>
    </div>
  )
}