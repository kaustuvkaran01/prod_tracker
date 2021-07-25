import React,{ Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Cards from '../Card/Card';
import Boxes from '../Boxes/Boxes';
import design from '../../../images/design.png';
// import svg1 from '../../../images/react-svg.svg';

const boxes = [ {
  heading:'Motivation',
  subheading:'Your daily dose of motivation',
  link:'/motivation'
  // svg1:'../../../images/react-svg.svg'
},{
  heading:'Workout',
  subheading:'Your daily dose of workout',
  // svg1:'../../../images/react-svg.svg',
  link:'/workout'
},{
  heading:'Latest News',
  subheading:'Your daily dose of drama',
  // svg1:'../../../images/react-svg.svg',
  link:'/news'
},{
  heading:'Random',
  subheading:'Your daily dose of random',
  // svg1:'../../../images/react-svg.svg',
  link:'/something'
}]
class Left extends Component {
  render(){
    return (
      <LeftContainer>
        <div className="quote">
          <p className="quote-text">
            "Start where you are, do what you can, use what you have."
          </p>
          <div className="design">
            {/* This is where the design comes in */}
            <img src={design}/>
          </div>
        </div>
        <div className="boxes">
          <p>Additional Resources</p>
          <div className="boxes-div">
            {boxes.map(box => {
              return(<NavLink to={box.link}><Boxes heading={box.heading} subheading={box.subheading}/></NavLink>);
            })}
          </div>
        </div>
      </LeftContainer>
    );
  }
}

export default Left;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 50%;
  border-radius: 24px;
  background: #edf2fc;
  height: 90vh;
  align-items:center;
  justify-content:center;
  .quote {
    display:flex;
    height: 10rem;
    width: 40rem;
    background: #16056D;
    border-radius: 24px;
    align-items:center;
    justify-content:space-between;
  }
  .quote-text {
    text-align: right;
    font-size:x-large;
    font-family:'Poppins';
    color:white;
    width:20rem;
  }
  .design img{
    height:10rem;
    border-radius:0 24px 24px 0;
  }
  .boxes {
    // margin: 3rem;
    align-self:center;
    margin-top:3rem;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    gap: 2rem;
    background:transparent;
    font-weight:500;
    font-size:x-large;
    color: #292639;
    width:40rem;
    // border: 1px solid var(--border-yellow);
  }
  .boxes-div{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    height:45%;
    gap:2rem;
    justify-content:space-between;
  }
`;