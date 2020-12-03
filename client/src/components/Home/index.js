import React from 'react';
// import NavbarComponent from '../Navbar/index';
import Left from './Left/index';
import Right from './Right/index';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
    </HomeContainer>
  );
}
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap:3rem;
  margin-top: 6rem;
  height: 100%;
  width: 100%;
  // height:100vh;
  justify-content:center;
  .left {
    min-width:60%;
    height:90%;
  }
  .right {
    min-width: 25%;
    height:90%;
  }
`;