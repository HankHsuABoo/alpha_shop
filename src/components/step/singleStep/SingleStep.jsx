import styles from "./SingleStep.module.css"

export default function Step({ number, title, data, currentStep}) {
  return (
      <div className={styles.stepGroup}>
        <div className ={`${styles.stepIcon} ${data.number < currentStep ? styles.active : ""} ${data.number <= currentStep ? styles.current : ""}`}>{number}</div>
        <h3 className ={`${styles.stepTitle} ${data.number <= currentStep ? styles.active : ""} ${data.number <= currentStep ? styles.current : ""}`}>{title}</h3>
      </div>
  )
 }
