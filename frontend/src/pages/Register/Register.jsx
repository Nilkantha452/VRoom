import React from 'react'
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
  return (
    <div>
        This is Register
    </div>
  )
}

export default Register