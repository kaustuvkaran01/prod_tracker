import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';
import './index.css'
import Cards from '../Card/index';
import { AnimateSharedLayout } from "framer-motion"

function Workout() {
  return (
    <WorkoutContainer>
      <div>
        <NavbarComponent />
      </div>
      
      <div style = {{paddingTop:"2em",height:"5vh",width:"5vw"}}>
        {/* <WorkoutPage/> */}
      </div>

      <div className="workout-container">
        <p>This is the workout page.</p>
        
      </div>
    </WorkoutContainer>
  );
}
export default Workout;

const WorkoutContainer = styled.div`
  .workout-container{
    padding-top:5rem;
    color:black;
  }
`;