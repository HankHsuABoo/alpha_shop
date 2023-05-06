import checkIcon from "../../../icon/circle-check-solid.svg"
import Step from "../SingleStep/SingleStep.jsx"
import {steps} from "../../../data/stepsData"
import styles from "./StepProgress.module.css"
 
function renderStep(stepData) {
  return (
    stepData.map(data => {
      if(data.number < stepData.length) {
        return(
          <div className={styles.stepContainer}>
              <span className={styles.checkIcon}> 
                <img src={checkIcon} alt="check icon" />
              </span>
              <Step number={data.number} title={data.title} />
              <div className={styles.connectLine}></div>
          </div>
        )
      } else {
        return(
          <div className={styles.stepContainer}>
              <span className={styles.checkIcon}> 
                <img src={checkIcon} alt="check icon" />
              </span>
              <Step number={data.number} title={data.title} />
          </div>
        )
      }
    })
  )
 }

 export default function StepProgress() {
  return(
    <div className ={styles.stepsContainer}>
      {renderStep(steps)}
    </div>
  )
 }