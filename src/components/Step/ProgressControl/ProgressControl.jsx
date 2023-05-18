import { useContext } from "react";

import { FormContext } from "../../../context/FormContext.js";
import { CartContext } from "../../../context/CartContext.js";

import styles from "./ProgressControl.module.css"

export default function ProgressControl({currentStep, onStepChange}) {
  const {formContent} = useContext(FormContext)
  const {totalPrice} = useContext(CartContext)
  function handlePrevStep() {
    if (currentStep>1){
      onStepChange(currentStep - 1)
    }
  }
  function handleNextStep() {
    if (currentStep<3){
      onStepChange(currentStep + 1)
    }else if (currentStep === 3){
      console.log(formContent)
      console.log(totalPrice)
    }
  }
  return(
    <div className={styles.progressControl}>
      <div>
        {currentStep !== 1 &&<button className={styles.prevStepButton} onClick={handlePrevStep}>← 上一步</button>}
      </div>
      <button className={styles.nextStepButton} onClick={handleNextStep}>
        {currentStep < 3 ? "下一步  →" : "確認下單"}
      </button>
    </div>
  )
}
