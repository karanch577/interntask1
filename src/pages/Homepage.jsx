import React from 'react'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PredictWinner from '../components/PredictWinner'
import PredictionHistory from '../components/PredictionHistory'
import HowToPlay from '../components/HowToPlay'
import HomeFooter from '../components/HomeFooter'

function Homepage() {
  return (
    <Container>
        <Hero />
        <PredictWinner />
        <PredictionHistory />
        <HowToPlay />
        <HomeFooter />
    </Container>
  )
}

export default Homepage