import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';
import './index.css'
import WorkoutCard from './WorkoutCard';
import { AnimateSharedLayout } from "framer-motion"
import icon1 from '../../images/sleep.webp';

export default function Workout() {
  return (
    <WorkoutContainer>
      <div>
        <NavbarComponent />
      </div>
      
      <div style = {{paddingTop:"2em",height:"5vh",width:"5vw"}}>
        {/* <WorkoutPage/> */}
      </div>

      <div className="workout-container">
        <WorkoutCard logo = {icon1} title = "Biceps" text = "Inder will give the content💪"/>
        <WorkoutCard logo = {icon1} title = "Triceps" text = "Guess what, I know some too"/>
        <WorkoutCard logo = {icon1} title = "Legs" text = ""/>

        {/* /*NOTE: I was thinking ki content net se bhi utha skte hain. Like content kisi webpage se utha kar daal diya card mein. Also 
        cards saare center mein nhi aa rhe hain. Also vo framer vaala smjhna padega ki kaise apply hoga vo ek component par. Images v
          vagarah waali trivial cheezein to last moment par bhi lag jaayengi

        */}


      </div>
    </WorkoutContainer>
  );
}

const WorkoutContainer = styled.div`
  background: #a521da;
  .workout-container {
    padding-top: 5rem;
    color: black;
    height: 95.5vh;
    margin: 2rem 0 0 2rem;
    display:flex;
    flex-direction:row;
    flex-gap: 2rem;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
  }
`;