import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'

const StepName = ({onNext}) => {
  return (
    <>
      <Card title='Step Name' icon ='mail'>
        <Button onClick={onNext} text='Next'/>
      </Card>
  </>
  )
}

export default StepName