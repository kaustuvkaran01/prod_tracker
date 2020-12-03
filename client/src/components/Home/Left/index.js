import React,{ Component } from 'react';
import styled from 'styled-components';
import Cards from '../../Card/index';
import Boxes from '../../Boxes/index';

class Left extends Component {
  render(){
    return (
      <LeftContainer>
        <div className="quote">
          <p className="quote-text">
            "START WHERE YOU ARE. USE WHAT YOU HAVE. DO WHAT YOU CAN."
          </p>
        </div>
        <div className="boxes">
          <p>Additional Resources</p>
          <div className="boxes-div">
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
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
  background: var(--light-blue);
  height: 80vh;
  // border: 1px solid var(--border-yellow);
  align-content:center;
  justify-content:center;
  .quote {
    height: 10rem;
    width: 80%;
    // margin: 2.5rem;
    align-self:center;
    background: var(--medium-blue);
    border-radius: 24px;
  }
  .quote-text {
    margin: 1rem 1rem 1rem 1rem;
    text-align: center;
    font-size:xX-large;
    font-family:'Poppins';
    color:var(--border-yellow);
  }
  .boxes {
    // margin: 3rem;
    align-self:center;
    margin-top:3rem;
    // display:flex;
    // flex-wrap:wrap;
    // flex-direction:column;
    gap: 2rem;
    background:transparent;
    font-weight:500;
    font-size:x-large;
    color: var(--main-dark);
    height:50%;
    width:80%;
    // border: 1px solid var(--border-yellow);
  }
  .boxes-div{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    height:45%;
    gap:2rem;
    justify-content:space-between;
    // padding:1rem;
  }
`;