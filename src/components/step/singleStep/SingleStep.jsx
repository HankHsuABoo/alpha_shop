import styles from "./SingleStep.module.css"

export default function Step({ number, title }) {
  return (
      <div className={styles.stepGroup}>
        <div className ={styles.stepIcon}>{number}</div>
        <h3 className ={styles.stepTitle}>{title}</h3>
      </div>
  )
 }
