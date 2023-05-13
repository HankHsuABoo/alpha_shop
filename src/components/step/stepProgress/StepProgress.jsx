import checkIcon from "../../../icon/circle-check-solid.svg"
import Step from "../SingleStep/SingleStep.jsx"
import {steps} from "../../../data/stepsData"
import styles from "./StepProgress.module.css"
 
function renderStep(stepData, currentStep) {
  return (
    stepData.map(data => {
      if(data.number < stepData.length) {
        return(
          <div key={data.number} className={styles.stepContainer}>
              <span className={`${styles.checkIcon} ${data.number < currentStep ? styles.active :""}`}> 
                <img src={checkIcon} alt="check icon" />
              </span>
              <Step number={data.number} title={data.title} data={data} currentStep={currentStep}/>
              <div className={`${styles.connectLine} ${data.number < currentStep ? styles.active :""}`}></div>
          </div>
        )
      } else {
        return(
          <div key={data.number} className={styles.stepContainer}>
              <span className={`${styles.checkIcon} ${data.number < currentStep ? styles.active : ""}`}> 
                <img src={checkIcon} alt="check icon" />
              </span>
              <Step number={data.number} title={data.title} data={data} currentStep={currentStep}/>
          </div>
        )
      }
    })
  )
 }

 export default function StepProgress({currentStep}) {
  return(
    <div className ={styles.stepsContainer}>
      {renderStep(steps, currentStep)}
    </div>
  )
 }