import React from 'react';
import styled from 'styled-components';
import icon1 from '../../images/sleep.webp';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Cards({ user_id,id,name,count }) {
  const percentage = Math.ceil({count}/30);
  return (
    <CardContainer>
      <div className="left">
        <p className="heading">
          {name}
          <p className="sub-head">Today</p>
        </p>
      </div>
      <div>
        <CircularProgressbar
          value={count}
          text={`${count}`}
          styles={buildStyles({
            textSize: "48px",
            rotation: 0.25,
          })}
        />
      </div>
      <div className="right">
        <button className="counter-btn">
          <IoIosArrowUp />
        </button>
        <button className="counter-btn">
          <IoIosArrowDown />
        </button>
      </div>
    </CardContainer>
  );
}
export default Cards;

const CardContainer = styled.div`

    height:7vh;
    width:80%;
    // border:1px solid blue;
    align-self:center;
    background: var(--light-blue);
    border-radius: 6px;
    display:flex;
    align-items:center;
    justify-content:center;
    .left{
      // display:flex;
      // flex-direction:row;
      // gap:1rem;
      width:1rem;
      justify-content:left;
    }
    .right{
      display:flex;
      height:90%;
      align-items:center;
      justify-content:center;
      gap:12px;
      // border: 2px solid black;
    }
    .heading{
      font-weight:600;
      font-size:normal;
    }
    .sub-head{
      font-weight:400;
      font-size:small;
    }
    .counter-btn{
      border-radius:50%;
      border:2px solid var(--main-dark);
      background: var(--light-blue);
      display:flex;
      align-items:center;
      padding:0.5rem;
    }

`;