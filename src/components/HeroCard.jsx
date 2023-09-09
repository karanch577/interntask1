import React from 'react'

function HeroCard({imgUrl, text, className}) {
  return (
    <div className='grow'>
        <div className={`${className} rounded-[7px] h-[54px] flex items-center justify-center px-4`}>
            <img className='w-[27px] min-[370px]:w-[31px]' src={imgUrl} alt="icon" />
        </div>
        <p className='text-[3vw] min-[340px]:text-[12px] my-2'>{text}</p>  
    </div>
  )
}

export default HeroCard