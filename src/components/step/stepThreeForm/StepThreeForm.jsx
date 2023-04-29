import {TextInput} from "../formCell/TextInput.jsx"
import styles from "./stepThreeForm.module.css"

export function StepThreeForm() {
  return(
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>付款資訊</h2>
      <form className={styles.formBody}>
        <TextInput className={styles.personName} title="持卡人姓名" type="text" placeholder="John Doe"/>
        <TextInput className={styles.creditCardNum} title="卡號" type="text" placeholder="1111 2222 3333 4444"/>
        <TextInput className={styles.period} title="有效期限" type="text" placeholder="MM/YY"/>
        <TextInput className={styles.securityCode} title="CVC / CCV" type="text" placeholder={123}/>
      </form>
    </div>
  )
} 
