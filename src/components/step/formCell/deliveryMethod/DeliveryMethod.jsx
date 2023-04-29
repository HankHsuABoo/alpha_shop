import styles from "./deliveryMethod.module.css"
export function DeliveryMethod({ className, deliveryData }) {
  return(
    <div className={styles.radioGroup}>
      <label className={styles.radioLabel}>
        <input
          className={styles.radioInput}
          id={deliveryData.id}
          type="radio"
          name="shipping"
        />
        <div className={styles.deliveryInfoContainer}>
          <div className={styles.deliveryInfo}>
            <div className={styles.deliveryTitle}>{deliveryData.title}</div>
            <div className={styles.deliveryTime}>{deliveryData.time}</div>
          </div>
          <div className={styles.deliveryPrice}>{deliveryData.price}</div>
        </div>
      </label>
    </div>
    
  )
}