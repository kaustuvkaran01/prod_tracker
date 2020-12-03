import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';
import WorkoutCard from './WorkoutCard/index';

function Workout() {
  return (
    <WorkoutContainer>
      <NavbarComponent />
      <div className="workout-container">
        <WorkoutCard content="Abs" to="/" />
        <WorkoutCard content="Legs" to="/workout" />
        <WorkoutCard content="Abs" to="/" />
        <WorkoutCard content="Legs" to="/workout" />        <WorkoutCard content="Abs" to="/" />
        <WorkoutCard content="Legs" to="/workout" />
      </div>
    </WorkoutContainer>
  );
}
export default Workout;

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