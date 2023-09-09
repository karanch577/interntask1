import React from 'react'

function ScoreBanner() {
  return (
    <div className='bg-primary-green rounded-[11px] text-white px-4 py-5 flex'>
    <div className="left flex flex-col items-center gap-4 w-full px-[1px]">
      <h3 className='text-[14px] font-[600]'>Predictions</h3>
      <div className="border w-full border-dashed"></div>
      <h3 className='text-[20px]'>11</h3>
    </div>

    <div className="mid flex flex-col items-center gap-4 w-full px-[1px]">
      <h3 className='text-[14px] font-[600]'>Won</h3>
      <div className="border w-full border-dashed"></div>
      <h3 className='text-[20px]'>7</h3>
    </div>

    <div className="right flex flex-col items-center gap-4 w-full px-[1px]">
      <h3 className='text-[14px] font-[600]'>Lost</h3>
      <div className="border w-full border-dashed"></div>
      <h3 className='text-[20px]'>4</h3>
    </div>
</div>
  )
}

export default ScoreBanner