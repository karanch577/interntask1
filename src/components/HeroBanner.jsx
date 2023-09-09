import React from "react";

function HeroBanner() {
  return (
    <div className="bg-primary-green rounded-[11px] text-white px-4 py-5">
      <div className="flex justify-between items-center">
        <div className="left">
          <h2 className="text-[4.6vw] min-[379px]:text-[20px]">
            <span className="font-[600]">Predict</span> and win
            <br />
            coupons <span className="font-[600]">everyday!</span>
          </h2>
        </div>
        <div className="img border-dotted border-l-2 px-5 ml-2 shrink-0">
          <img className="w-[52px]" src="./batlogo.svg" alt="logo" />
        </div>
      </div>
      <p className="text-[3.5vw] min-[335px]:text-[12px] text-center pt-3">
        3 lucky winners get season-end{" "}
        <span className="font-[600]">Megaprize!</span>
      </p>
    </div>
  );
}

export default HeroBanner;
