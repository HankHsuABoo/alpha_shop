export function TextInput( {className, title, type, placeholder }) {
  return(
    <div className={className}>
      <div className="inputLabel">{title}</div>
      <input className="formRow" type={type} placeholder={placeholder} required/>
    </div>
  )
}