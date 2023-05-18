import { useContext } from "react"

import { FormContext } from "../../../context/FormContext.js"

export default function TextInput( {className, title, type, placeholder, inputId }) {
  const {formContent, onFormChange} = useContext(FormContext)

  function handleFormContent(e) {
    onFormChange({
      ...formContent,
      [e.target.id] : e.target.value
    })
  }   
  return(
    <div className={className}>
      <div className="inputLabel">{title}</div>
      <input className="formRow" id={inputId} type={type} placeholder={placeholder} onChange={handleFormContent} required/>
    </div>
  )
}