import React from "react";
import ScoreBanner from "../components/ScoreBanner";
import Container from "../components/Container"
import ScorePredictionHistory from "../components/ScorePredictionHistory";

function Scorecard() {
  return (
      <Container>
        <ScoreBanner />
        <ScorePredictionHistory />
      </Container>
  );
}

export default Scorecard;
