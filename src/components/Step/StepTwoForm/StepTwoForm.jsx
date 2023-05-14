import DeliveryMethod from "../FormCell/DeliveryMethod/DeliveryMethod.jsx"
import {deliveryMethods} from "../../../data/deliveryMethods.js"
import styles from "./StepTwoForm.module.css"

export default function StepTwoForm() {  
  return(
    <div className ={styles.formContainer}>
      <h2 className ={styles.formTitle}>運送方式</h2>
      <form className={styles.formBody}>
        {deliveryMethods.map( method => {
          return(
            <DeliveryMethod deliveryData={method}/>
          )
        })}
      </form>
    </div>
  )
}
