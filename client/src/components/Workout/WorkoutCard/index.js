import React from 'react';
import styled from 'styled-components';
function WOCards(props){
    return(
        <WorkoutCardContainer>
            <img src = {props.logo}/>
            <p> {props.title}</p>
            <p> {props.text}</p>
        </WorkoutCardContainer>
    );
}

export default WOCards;
const WorkoutCardContainer = styled.div`

height:20rem;
width: 15rem;
border-radius: 24px;
background: white;
padding: 1.5rem;
margin:2rem;
background: #0e1111;
text-align:center;
img{
    height: 60%;
    border-radius:50%;
    border: 10px solid #A521DA;
}
p{
    font-size:x-large;
    color:white;
}
button{
    background:transparent;
    border:transparent;
    color:white;
}

`;