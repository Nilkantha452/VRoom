import React, {useState} from 'react'
import Styles from './Register.module.css'
import StepPhoneMail from '../Steps/StepPhoneMail/StepPhoneMail'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUserName from '../Steps/StepUserName/StepUserName'

const Steps = {
    1: StepPhoneMail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUserName
}
const Register = () => {
  const [currStep, setCurrStep] = useState(1);
  const ComponentToShow = Steps[currStep];
  function onNext(){
    setCurrStep(currStep + 1)
  }

  return (
    <div>
        <ComponentToShow onNext={onNext}/>
    </div>
  )
}

export default Register