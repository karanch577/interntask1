import React from 'react'
import LeaderBoardCard from './LeaderBoardCard'

function LeaderBoard() {
  return (
    <>
        <h2 className='text-[20px] font-[600] text-primary-blue mb-3 mx-3'>Leaderboard</h2>
       <div className='flex flex-col gap-5'>
        <LeaderBoardCard team="Bangalore" fans="2,77,777" position="1" />
        <LeaderBoardCard team="Chennai" fans="2,77,777" position="2" />
        <LeaderBoardCard team="Mumbai" fans="2,77,777" position="3" />
        <LeaderBoardCard team="Rajasthan" fans="2,77,777" position="4" />
        <LeaderBoardCard team="Punjab" fans="2,77,777" position="5" />
        <LeaderBoardCard team="Hyderabad" fans="2,77,777" position="6" />
        <LeaderBoardCard team="Delhi" fans="2,77,777" position="7" />
    </div>
    </>
  )
}

export default LeaderBoard