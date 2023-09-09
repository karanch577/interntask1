import React from 'react'
import HistoryCard from './HistoryCard'

function ScorePredictionHistory() {
  return (
    <div className='mt-11'>
        <h3 className='text-[20px] font-[600] text-primary-blue'>Prediction history</h3>
        <div className="history mt-5">
            <div className="heading flex border-b-2 border-gray-300 pb-1 gap-1">
                <p className='w-[69%]'>Match</p>
                <p className='w-[31%]'>Result</p>
            </div>

            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="NA" />
            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="won" />
            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="won" />
            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="won" />
            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="lost" />
            <HistoryCard date="12th May, 2022" team1="RR" team2="MI" result="won" />
        </div>
    </div>
  )
}

export default ScorePredictionHistory