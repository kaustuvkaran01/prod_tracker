import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
function WorkoutCard(props) {
  return (
    <WorkoutCardContainer>
      <NavLink to={props.to}>
        <p>{props.content}</p>
      </NavLink>
    </WorkoutCardContainer>
  );
}
export default WorkoutCard;

const WorkoutCardContainer = styled.div`
    height: 15rem;
    width: 25rem;
    background: black;
    color:white;
    border-radius:24px;
    padding: 2rem 1rem 2rem 1rem;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin: 0 2rem 0 2rem;
    p{
        opacity:0.7;
        font-weight:400;
        color: #a521da;
        text-decoration:none;
        font-size: 5rem;
    }
`;