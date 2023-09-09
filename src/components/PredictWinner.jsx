import React from 'react'
import team1Img from "../assets/predictTeam1.svg"
import team2Img from "../assets/predictTeam2.svg"
import addComma from '../utils/addComma'

function PredictWinner() {
  const data = {
    team1: "Bangalore",
    team1Img,
    team2: "Chennai",
    team2Img,
    date: "Fri, 27 May",
    matchType: "Qualifiers",
    noOfPredicts: 154777
  }

  const formattedPredicts = addComma(data.noOfPredicts)
  return (
    <div className='rounded-[11px] relative pt-16 shadow-primary my-12'>
      {/* absolute card start */}
      <div className='flex justify-center'>
        <div className='flex items-center justify-center flex-col absolute -top-6 z-10 bg-white'>
          <div className="card rounded-[7px] p-3 shadow-absolute-card">
            <h2 className='font-[600] text-primary-blue'>Predict the Winner!</h2>
          </div>
          <p className='text-primary-orange text-[12px]'>Awaiting results...</p>
        </div>
      </div>
      {/* absolute card end */}

      <div className="team-container mb-9 flex justify-between items-center px-[12%]">
        {/* team 1 start */}
        <div className='relative'>
        <div className='flex justify-center items-center w-[82px] h-[82px] rounded-full overflow-hidden bg-[#D9D9D9]'>
          <img src={data.team1Img} alt="team1" />
        </div>
        <div className='flex justify-center'>
        <p className='text-[14px] absolute -bottom-7 text-center'>{data.team1}</p>
        </div>
        </div>
        {/* team 1 end */}

        <p className='text-[12px]'>VS</p>

        {/* team 2 start */}
        <div className='relative'>
        <div className='flex justify-center items-center w-[82px] h-[82px] rounded-full overflow-hidden bg-[#FFE712]'>
          <img src={data.team2Img} alt="team2" />
        </div>
        <div className='flex justify-center'>
        <p className='text-[14px] absolute -bottom-7 text-center'>{data.team2}</p>
        </div>
        </div>
        {/* team 2 end */}
      </div>

      {/* text start */}
        <div className='flex justify-between px-[8%] mt-12'>
          <p className='text-[10px] my-3'>{data.date} : {data.matchType}</p>
          <p className='text-[10px] my-3'>{formattedPredicts} predicted!</p>
        </div>
      {/* text end */}
    </div>
  )
}

export default PredictWinner