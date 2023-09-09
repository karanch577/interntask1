import React from "react";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/howImg1-cropped.svg"

function HowToPlay() {
  return (
  <div className="pb-16">
    <h3 className="text-primary-blue font-[600] mb-9">How to Play?</h3>

    {/* Carousel start */}
        <Carousel
        showArrows={false}
        showStatus={false}
        // showIndicators={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          
          return (
            <span
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
              className={`w-[10px] h-[10px] rounded-full mx-1 inline-block ${isSelected ? "bg-[#A8A4A4]" : "bg-[#D9D9D9]"}`}
            >
              
            </span>
          );
        }}
        className="shadow-primary rounded-[11px]">
            {/* slide 1 start */}
            <div className="flex flex-col items-center mt-1">
                <p className="text-center text-[12px] my-2">Submit your <span className="text-primary-orange">predictions</span><br />before the timer ends</p>

                <div className="w-[60%] mb-2">
                    <img className="w-full" src={slide1} alt="predictImage" />
                </div>
            </div>
            {/* slide 1 end */}

             {/* slide 2 start */}
             <div className="flex flex-col items-center">
                <p className="text-center text-[12px] my-2">Submit your <span className="text-primary-orange">predictions</span><br />before the timer ends</p>

                <div className="w-[60%] mb-2">
                    <img className="w-full" src={slide1} alt="predictImage" />
                </div>
            </div>
            {/* slide 2 end */}

             {/* slide 3 start */}
             <div className="flex flex-col items-center">
                <p className="text-center text-[12px] my-2">Submit your <span className="text-primary-orange">predictions</span><br />before the timer ends</p>

                <div className="w-[60%] mb-2">
                    <img className="w-full" src={slide1} alt="predictImage" />
                </div>
            </div>
            {/* slide 3 end */}
        
        </Carousel>
    {/* Carousel end */}
  </div>
  );
}

export default HowToPlay;
