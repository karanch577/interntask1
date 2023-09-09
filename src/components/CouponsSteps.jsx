import React from 'react'
import CouponsStepOne from './CouponsStepOne'
import CouponsStepTwo from './CouponsStepTwo'
import CouponsStepThree from './CouponsStepThree'
import CouponsStepFour from './CouponsStepFour'

function CouponsSteps() {
  return (
    <div className='px-9 mt-16 w-full max-w-[425px] mx-auto'>
      <CouponsStepOne />
      <CouponsStepTwo />
      <CouponsStepThree />
      <CouponsStepFour />
    </div>
  )
}

export default CouponsSteps