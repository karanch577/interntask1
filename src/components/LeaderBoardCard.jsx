import React from "react";

function LeaderBoardCard({ team, fans, position }) {
  let imgUrl =
    Number(position) === 1
      ? "./leader1.svg"
      : Number(position) === 2
      ? "./leader2.svg"
      : Number(position) === 3
      ? "./leader3.svg"
      : "./leader4.svg";

  return (
    <div
      className={`shadow-primary flex items-center justify-between px-5 rounded-[11px] py-2 ${
        Number(position) === 1
          ? "bg-[#FFC727] bg-opacity-40"
          : Number(position) === 2
          ? "bg-[#C1C1C1] bg-opacity-40 "
          : Number(position) === 3
          ? "bg-[#C7A03B] bg-opacity-40  "
          : "bg-white bg-opacity-90 "
      }`}
    >
      <div className="left flex items-center gap-4">
        <div
          className={`circle w-[37px] h-[37px] rounded-full ${
            Number(position) > 3 ? "bg-gray-300" : "bg-white"
          }`}
        ></div>
        <div className="text">
          <h3 className="font-[500]">{team}</h3>
          <p className="text-[12px] mt-0.5">{fans} fans</p>
        </div>
      </div>
      <div className="img h-[58px] w-[60px] flex items-center justify-center relative">
        <img src={imgUrl} alt="leaderboardImg" />

        <p className={`${position < 4 ? "hidden": "absolute"}  text-white font-[500] top-5`}>#{position}</p>
      </div>
    </div>
  );
}

export default LeaderBoardCard;
