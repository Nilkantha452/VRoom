import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'

const StepOtp = ({onNext}) => {
  return (
    <>
      <Card title='Step otp' icon ='mail'>
      <Button onClick={onNext} text='Next'/>
      </Card>
  </>
  )
}

export default StepOtp