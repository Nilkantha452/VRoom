import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'

const StepUserName = ({onNext}) => {
  return (
    <>
      <Card title='Step user name' icon ='mail'>
        <Button onClick={onNext} text='Next'/>
      </Card>
    </>
  )
}

export default StepUserName