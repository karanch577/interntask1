import React from 'react'
import headerImg from "../assets/fanHeaderImg.svg"

function FanHeader() {
  return (
    <div className='mb-10'>
        <img className='mx-auto' src={headerImg} alt="headerImg" />
         <h2 className='text-[20px] font-[600] flex justify-center gap-4'><span className='text-primary-blue ml-2 tracking-[0.3rem]'>FAN</span><span className='text-primary-orange tracking-[0.3rem]'>ZONE</span></h2>
    </div>
  )
}

export default FanHeader