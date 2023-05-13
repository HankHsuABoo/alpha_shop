
import { useState } from "react";

import Main from "./components/Main/Main.jsx"
import './App.css';

export default function App() {
  const [step, setStep] = useState(1)
  return (
    <div>
      {/*header*/}
      <Main currentStep={step} onStepChange={setStep}/>
      {/*footer*/}
    </div>
  );
}


