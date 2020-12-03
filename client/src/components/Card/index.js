import React from 'react';
import styled from 'styled-components';
import icon1 from '../../images/sleep.webp';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';

function Cards(props) {
  return (
    <CardContainer>
      <div className="left">

      <p className="heading">Heading
      <p className="sub-head">Today</p></p>
      </div>
      <div className="right">
        <p className="heading">count</p>
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
    .left{
      height:90%;
    }
    .right{
      height:90%;
    }
    .heading{
      font-weight:600;
      font-size:normal;
    }
    .sub-head{
      font-weight:400;
      font-size:small;
    }

`;