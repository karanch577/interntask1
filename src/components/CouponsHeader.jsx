import React from 'react'

function CouponsHeader() {
  return (
    <div className='bg-primary-blue text-white w-full max-w-[425px] mx-auto pt-16 pb-2.5 relative'>
        <h2 className='text-[20px] mx-9 mb-4'>How to claim the<br /><span className='font-[600] text-[#FFC727]'>GOLD</span> Coupon?</h2>

        <div className="border-b-[1px] border-dashed "></div>
        
        {/* absolute div start */}
        <div className="bg-[#FFC727] absolute right-7 -bottom-10 rounded-[7px] p-5 rotate-[9.974deg]">
            <div className="circle rounded-full border border-dashed p-1.5">
            <div className="rounded-full w-[36px] h-[36px] bg-white flex items-center justify-center">
                <p className='text-[12px] font-[400] text-black -rotate-[9.974deg]'>logo</p>
            </div>
            </div>
           
        </div>
        {/* absolute div end */}
    </div>
  )
}

export default CouponsHeader