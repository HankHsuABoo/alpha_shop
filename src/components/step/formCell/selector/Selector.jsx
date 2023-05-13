import styles from "./Selector.module.css"

export default function Selector({ className, title, optionsData }){
  const options = optionsData.map(option =>{
      return(
      <option key={option.title} value={option.value}>{option.title}</option>
      )
  })
  return(
    <div className={className}>
      <div className="inputLabel">{title}</div>
      <div className={styles.selectWrapper}>
        <select className={`formRow ${styles.select}`} required>
         {options}
        </select>  
      </div>
    </div>
  )
} 
  
  
  