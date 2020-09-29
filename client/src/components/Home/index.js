import React from 'react';
import NavbarComponent from '../Navbar/index';
import MainPage from './Main/index';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <div>
        <NavbarComponent />
      </div>
      <div style={{paddingTop:"2rem",height:"100vh",width:"100vw"}}>
        <MainPage />
      </div>
    </HomeContainer>
  );
}
export default Home;

const HomeContainer = styled.div`
    display: flex;
    // height:100vh;
`;
