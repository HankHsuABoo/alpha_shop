import { StepProgress } from '../step/stepProgress/StepProgress';
import { StepOneForm } from '../step/stepOneForm/StepOneForm.jsx';
// import { StepTwoForm } from '../step/stepTwoForm/StepTwoForm.jsx';
// import { StepThreeForm } from '../step/stepThreeForm/StepThreeForm.jsx';
import { ProgressControl } from '../step/progressControl/ProgressControl.jsx';
import styles from "./main.module.css"


export function Main() {
  return (
    <div className ={styles.mainContainer}>
      <h1 className={styles.mainTitle}>結帳</h1>
      <div className={styles.mainContent}>        
        <div className={styles.form}>
          <StepProgress/>
          <StepOneForm/>
          {/* <StepTwoForm/>
          <StepThreeForm/> */}
          <ProgressControl/>
        </div>
        <div className={styles.cart}>
          {/*cart*/}
        </div>
      </div>
    </div>
  );
}
