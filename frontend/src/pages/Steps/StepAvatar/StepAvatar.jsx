import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'

const StepAvatar = (onNext) => {
  return (
    <>
      <Card title='Step Avatar' icon ='mail'>
        <Button onClick={onNext} text='Next'/>
      </Card>
    </>
  )
}

export default StepAvatar