import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';
// import './styles.css'
import WOCards from './WorkoutCard/index';
import { AnimateSharedLayout } from "framer-motion"
import icon1 from '../../images/sleep.webp';

const workout1 = [
  {
    heading:"Medial",
    subheading:"These exercise will target only the medial head, examples are supinated cable extension"
  },
  {
    heading:"Quads",
    subheading:"heck squats,squats, leg extensions,lunges, sissy squats"
  },
  {
    heading:"Chest",
    subheading:"bench press, pushups, diamond pushups, pec Dec fly, svend presses, incline pushups"
  },
]
const workout2 = [
  {
    heading:"Short Head",
    subheading:"Bicep curls are the best exercise for targeted hypertrophy along with supinated chin ups and different types of leans"
  },
  {
    heading:"Forearm",
    subheading:"behind the back curls, farmer shrugs, hang, one arm active hang, pronation curls, ulnar and lateral curls"
  },
  {
    heading:"Calves",
    subheading:"seated calf raises, calf raises, single leg calf raises, jump rope"
  },
]
const workout3 = [
  {
    heading:"Hamstrings",
    subheading:"Deadlifts, jefferson curls and hamstring curls are a good option to cause targeted hyper trophy"
  },
  {
    heading:"Glutes",
    subheading:"Glute Ham Raises, Glute bridge, pistol squats, sumo deadlift for targeted muscular hyper trophy"
  },
  {
    heading:"Back",
    subheading:"pullups, one arm pullups, commando pullups, chin ups, rows,front lever raises"
  }
]

export default function Workout() {
  return (
    <WorkoutContainer>
      <div className="section">
        <h1>Triceps</h1>
        {workout1.map(workout =>{
          return <WOCards heading={workout.heading} subheading={workout.subheading}/>
        })}
      </div>
      <div className="section">
        <h1>Biceps</h1>
        {/* <h1>Triceps</h1> */}
        {workout2.map(workout =>{
          return <WOCards heading={workout.heading} subheading={workout.subheading}/>
        })}
      </div>
      <div className="section">
        <h1>Legs</h1>
        {/* <h1>Triceps</h1> */}
        {workout3.map(workout =>{
          return <WOCards heading={workout.heading} subheading={workout.subheading}/>
        })}
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