import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';
// import './styles.css'
import WOCards from './WorkoutCard/index';
import { AnimateSharedLayout } from "framer-motion"
import icon1 from '../../images/sleep.webp';

export default function Workout() {
  return (
    <WorkoutContainer>
      <div className="section">
        <h1>Triceps</h1>
        <WOCards heading="Medial" subheading="These exercise will target only the medial head, examples are supinated cable extension"/>
        <WOCards heading="Medial" subheading="These exercise will target only the medial head, examples are supinated cable extension"/>
        <WOCards heading="Medial" subheading="These exercise will target only the medial head, examples are supinated cable extension"/>
        <WOCards heading="Medial" subheading="These exercise will target only the medial head, examples are supinated cable extension"/>
      </div>
      <div className="section">
        <h1>Biceps</h1>
        <WOCards heading="Short Head" subheading="Bicep curls are the best exercise for targeted hypertrophy along with supinated chin ups and different types of leans"/>
        <WOCards heading="Short Head" subheading="Bicep curls are the best exercise for targeted hypertrophy along with supinated chin ups and different types of leans"/>
        <WOCards heading="Short Head" subheading="Bicep curls are the best exercise for targeted hypertrophy along with supinated chin ups and different types of leans"/>
        <WOCards heading="Short Head" subheading="Bicep curls are the best exercise for targeted hypertrophy along with supinated chin ups and different types of leans"/>
      </div>
      <div className="section">
        <h1>Legs</h1>
        <WOCards heading="Hamstrings" subheading="Deadlifts, jefferson curls and hamstring curls are a good option to cause targeted hyper trophy"/>
        <WOCards heading="Hamstrings" subheading="Deadlifts, jefferson curls and hamstring curls are a good option to cause targeted hyper trophy"/>
        <WOCards heading="Hamstrings" subheading="Deadlifts, jefferson curls and hamstring curls are a good option to cause targeted hyper trophy"/>
        <WOCards heading="Hamstrings" subheading="Deadlifts, jefferson curls and hamstring curls are a good option to cause targeted hyper trophy"/>
      </div>
    </WorkoutContainer>
  );
}

const WorkoutContainer = styled.div`
  background: var(--light-blue);
  margin-top:3.5rem;
  display:flex;
  flex-direction:row;
  gap:24px;
  justify-content:space-evenly;
  .section{
    display:flex;
    flex-direction: column;
    height:90vh;
    width:25vw;
    // background:orangered;
    align-items:center;
    gap:1rem;
  }

`;