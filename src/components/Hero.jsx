import React from 'react'
import HeroBanner from './HeroBanner'
import HeroCard from './HeroCard'

function Hero() {
  return (
    <>
      <HeroBanner />
      <p className='text-center text-primary-orange mt-4 text-[12px]'>How to Play?</p>
      {/* card start */}
      <div className='flex gap-3 mt-11'>
      <HeroCard imgUrl="./heroicon1.svg" text="Scorecard" className="bg-primary-orange" />
      <HeroCard imgUrl="./batlogo.svg" text="Fan Zone" className="bg-primary-blue" />
      <HeroCard imgUrl="./heroicon3.svg" text="Coupons" className="bg-primary-orange" />
      <HeroCard imgUrl="./heroicon4.svg" text="Share & Earn" className="bg-primary-blue" />
      </div>
      {/* card end */}
    </>
  )
}

export default Hero