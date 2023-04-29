import {genders} from "../../../data/optionsData"
import {regions} from "../../../data/optionsData"
import {Selector} from "../formCell/selector/Selector.jsx"
import {TextInput} from "../formCell/TextInput.jsx"
import styles from "../stepOneForm/stepOneForm.module.css"

export function StepOneForm() {
  return(
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>寄送地址</h2>
      <form className={styles.formBody}>
        <Selector className={styles.personTitle} title="稱謂" optionsData={genders}/>
        <TextInput className={styles.personName} title="姓名" type="text" placeholder="請輸入姓名"/>
        <TextInput className={styles.phoneNum} title="電話" type="tel" placeholder="請輸入行動電話"/>
        <TextInput className={styles.email} title="Email" type="email" placeholder="請輸入電子郵件"/>
        <Selector className={styles.region} title="縣市" optionsData={regions}/>
        <TextInput className={styles.address} title="地址" type="text" placeholder="請輸入地址"/>
      </form>
    </div>
  )
}