import React from "react";

function HistoryCard({ date, team1, team2, result }) {
  const resultText =
    result === "won"
      ? "You won"
      : result === "lost"
      ? "You lost"
      : "Didn’t Predict";

  return (
    <div className="flex items-center my-4 gap-1">
      <div className="left w-[34%]">
        <p className="text-[12px]">{date}</p>
        <div className="team-container">
          {/* team1 start */}
          <span>{team1}</span> vs <span>{team2}</span>
        </div>
      </div>
      <div className="mid w-[35%]">
        <span className="circle w-[32px] h-[32px] rounded-full bg-gray-200 inline-block"></span>
        <span className="circle w-[32px] h-[32px] rounded-full bg-gray-400 inline-block relative right-3"></span>
      </div>
      <div className={`right w-[31%] text-[14px] font-[600] ${result === "won" ? "text-[#0BB76F]" : result === "lost" ? "text-[#FF5757]" : "text-[#626262]"}`}>
        {resultText}
      </div>
    </div>
  );
}

export default HistoryCard;
