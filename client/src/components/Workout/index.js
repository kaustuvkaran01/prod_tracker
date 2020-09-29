import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';

function Workout() {
  return (
    <WorkoutContainer>
      <NavbarComponent />
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