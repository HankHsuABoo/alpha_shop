import { useState } from 'react';

import { FormContext } from "./FormContext.js"

export default function FormContextProvider ({children}) {
  const [formContent, setFormContent] = useState({})
  const [deliveryPrice, setDeliveryPrice] = useState('')
  const value = {
    formContent,
    deliveryPrice,
    onFormChange: setFormContent,
    onOptionChange: setDeliveryPrice,
  }
  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  )
}