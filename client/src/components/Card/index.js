import React from 'react';
import styled from 'styled-components';
import icon1 from '../../images/sleep.webp';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';

function Cards(props) {
  return (
    <CardContainer>
      <img src={icon1} />
      <p>
        {props.type}
        <br />
        {props.sessions} / {props.totalsessions}
        <br />
        <button>
          <IoIosArrowDown size={50} />
        </button>
        <button>
          <IoIosArrowUp size={50} />
        </button>
      </p>
    </CardContainer>
  );
}
export default Cards;

const CardContainer = styled.div`

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