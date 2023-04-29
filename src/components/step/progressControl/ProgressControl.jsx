import styles from "./progressControl.module.css"

export function ProgressControl() {
  return(
    <div className={styles.progressControl}>
      <button className={styles.prevStepButton}>
        ← 上一步
      </button>
      <button className={styles.nextStepButton}>
        下一步 →
      </button>
      {/* <section className="button-group" data-phase="shipping">
        <button className="prev">
          ← 上一步
        </button>
        <button className="next">
          下一步 →
        </button>
      </section>
      <section className="button-group" data-phase="credit-card">
        <button className="prev">
          ← 上一步
        </button>
        <button className="next">確認下單</button>
      </section> */}
    </div>
  )
}
