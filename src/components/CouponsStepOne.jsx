import React from "react";

function CouponsStepOne() {
  return (
    <div>
      <h3 className="text-[20px] font-[600] text-primary-blue">Step 1</h3>
      <p className="text-[12px] mt-4 leading-medium">
        Lorem ipsum dolor sit amet,
        <br />
        consectetuer adipiscing elit,
        <br />
        sed diam nonummy nibh.
      </p>

      <div className="flex flex-col items-start mt-5">
        <div className=" shadow-primary ml-4 p-3 rounded-[7px] flex flex-col items-center">
          <div className="flex gap-2">
            <img className="self-start my-1" src="./star.svg" alt="star icon" />
            <img src="./stepsicon.svg" alt="stepsicon" />
            <img className="self-start my-1" src="./star.svg" alt="star icon" />
          </div>

          <p className="text-[9px] leading-medium my-2">
            Prize won from
            <br />
            top brands!
          </p>

          <button className="text-[12px] font-[500] text-white bg-primary-orange rounded-[5px] px-2.5 py-0.5">
            claim
          </button>
        </div>
      </div>
    </div>
  );
}

export default CouponsStepOne;
