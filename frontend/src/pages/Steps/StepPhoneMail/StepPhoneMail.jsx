import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
const StepPhoneMail = ({onNext}) => {
  return (
    <>
      <Card title='Step phone mail' icon ='mail'>
        <Button onClick={onNext} text='Next'/>
      </Card>
  </>
  )
}

export default StepPhoneMail