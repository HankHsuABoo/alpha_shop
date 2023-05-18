import { useContext } from "react"

import { FormContext } from "../../../../context/FormContext"

import styles from "./Selector.module.css"

export default function Selector({ className, title, optionsData, selectId }){
  const {formContent, onFormChange} = useContext(FormContext) 

  function handleSelectChange(e) {
    const target = e.target
    onFormChange({
      ...formContent,
      [target.id]: target[target.selectedIndex].value
    })
  }
  const options = optionsData.map(option =>{
      return(
      <option key={option.title} value={option.value}>{option.title}</option>
      )
  })
  return(
    <div className={className}>
      <div className="inputLabel">{title}</div>
      <div className={styles.selectWrapper}>
        <select className={`formRow ${styles.select}`} onChange={handleSelectChange} id={selectId} required>
         {options}
        </select>  
      </div>
    </div>
  )
} 
  
  
  