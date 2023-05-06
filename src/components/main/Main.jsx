import StepProgress from '../Step/StepProgress/StepProgress';
import StepOneForm from '../Step/StepOneForm/StepOneForm.jsx';
import Cart from "../Cart/Cart/Cart.jsx"
// import { StepTwoForm } from '../Step/StepTwoForm/StepTwoForm.jsx';
// import { StepThreeForm } from '../Step/StepThreeForm/StepThreeForm.jsx';
import ProgressControl from '../Step/ProgressControl/ProgressControl.jsx';
import styles from "./Main.module.css"


export default function Main() {
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
          <Cart/>
        </div>
      </div>
    </div>
  );
}
