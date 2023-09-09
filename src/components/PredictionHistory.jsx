import React from "react";
import team1Img from "../assets/historyTeam1.svg";
import team2Img from "../assets/historyTeam2.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import PredictionHistoryCard from "./PredictionHistoryCard";


function PredictionHistory() {

  const data = {
    team1Img,
    team2Img,
    team1WonChange: 41,
    team2WonChange: 59,
    date: "Fri, 27 May",
    matchType: "Qualifiers",
    noOfPredicts: 154777
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-primary-blue">Prediction history</h2>
        <p className="text-primary-orange text-[12px]">See Scoreboard</p>
      </div>
      {/* Carousel start */}
      <Carousel
      showArrows={false}
      showStatus={false}
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
        
        <PredictionHistoryCard {...data}  />
        <PredictionHistoryCard {...data} />

      </Carousel>


    </div>
  );
}

export default PredictionHistory;
