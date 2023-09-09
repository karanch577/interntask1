import React from 'react'

function HomeFooter() {
  return (
    <div className='mt-9'>
        {/* card start */}
        <div className="card shadow-home-footer rounded-[7px] flex items-center justify-between px-5 py-2 my-4">
            <p className='text-[14px]'>Read Game Rules</p>
            <img src="./arrow.svg" alt="arrow-icon" />
        </div>
        {/* card end */}

         {/* card start */}
         <div className="card shadow-home-footer rounded-[7px] flex items-center justify-between px-5 py-2 my-4">
            <p className='text-[14px]'>FAQ</p>
            <img src="./arrow.svg" alt="arrow-icon" />
        </div>
        {/* card end */}

         {/* card start */}
         <div className="card shadow-home-footer rounded-[7px] flex items-center justify-between px-5 py-2 my-4">
            <p className='text-[14px]'>Terms and Conditions</p>
            <img src="./arrow.svg" alt="arrow-icon" />
        </div>
        {/* card end */}
    </div>
  )
}

export default HomeFooter