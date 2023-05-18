import { useContext } from "react"

import { FormContext } from "../../../../context/FormContext.js"

import styles from "./DeliveryMethod.module.css"

export default function DeliveryMethod({ deliveryData }) {
  const { formContent, onFormChange, onOptionChange } = useContext(FormContext)

  function handleRadioChange(e) {
    onFormChange({
      ...formContent,
      "delivery-method": e.target.id,
      "delivery-price": deliveryData.price
    })
    onOptionChange(deliveryData.price)
  }
  return(
    <div className={styles.radioGroup}>
      <label className={styles.radioLabel}>
        <input
          className={styles.radioInput}
          id={deliveryData.id}
          type="radio"
          name="shipping"
          onChange={handleRadioChange}
        />
        <div className={styles.deliveryInfoContainer}>
          <div className={styles.deliveryInfo}>
            <div className={styles.deliveryTitle}>{deliveryData.title}</div>
            <div className={styles.deliveryTime}>{deliveryData.time}</div>
          </div>
          <div className={styles.deliveryPrice}>${deliveryData.price}</div>
        </div>
      </label>
    </div>
    
  )
}