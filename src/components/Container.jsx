import React from 'react'

function Container({children}) {
  return (
    <div className='px-6 py-16 w-full max-w-[425px] mx-auto'>{children}</div>
  )
}

export default Container