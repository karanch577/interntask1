import React from 'react'
import addComma from '../utils/addComma'

function PredictionHistoryCard(props) {
    const { team1Img, team2Img, team1WonChange, team2WonChange, date, matchType, noOfPredicts } = props

    const formattedPredicts = addComma(noOfPredicts)
  return (
    <div className="pt-5">
        <p className="text-center text-[14px] mb-2">You got it right!</p>

        <div className="team-container mb-9 flex justify-between items-center px-[12%]">
          {/* team 1 start */}
          <div className="relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] rounded-full overflow-hidden bg-[#D9D9D9]">
              <img src={team1Img} alt="team1" />
            </div>
            <div className="flex justify-center">
              <p className="text-[14px] absolute -bottom-7 text-center text-primary-orange">
                {team1WonChange}%
              </p>
            </div>

            {/* winner icon start */}
            {team1WonChange > 50 && 
            <div className='absolute -top-5'>
              <img src="./winnerIcon.svg" alt="winnerIcon" />
            </div>}
            {/* winner icon end */}
          </div>
          {/* team 1 end */}

          <p className="text-[12px]">VS</p>

          {/* team 2 start */}
          <div className="relative">
            <div className="flex justify-center items-center w-[82px] h-[82px] rounded-full overflow-hidden bg-[#D9D9D9]">
              <img src={team2Img} alt="team2" />
            </div>
            <div className="flex justify-center">
              <p className="text-[14px] absolute -bottom-7 text-center text-primary-blue">
                {team2WonChange}%
              </p>
            </div>

             {/* winner icon start */}
            {team2WonChange > 50 &&  
            <div className='absolute -top-5 right-0'>
              <img src="./winnerIcon.svg" alt="winnerIcon" />
            </div>}
            {/* winner icon end */}
          </div>
          {/* team 2 end */}
        </div>

        {/* progress bar start */}
        <div className="progressbar flex px-5 pt-4">
          <div className={`left w-[${team1WonChange}%] h-[5px] relative bg-primary-orange`}>
            <div className="divider absolute h-full z-10 w-[5px] bg-white top-0 -right-0.5"></div>
          </div>
          <div className={`right w-[${team2WonChange}%] h-[5px] bg-primary-blue`}></div>
        </div>
        {/* progress bar end */}

        <div className=" flex items-center justify-between px-5 mt-3 mb-2">
          <p className="text-[10px]">{date} : {matchType}</p>
          <p className="text-[10px]">{formattedPredicts} predicted!</p>
        </div>
      </div>
  )
}

export default PredictionHistoryCard