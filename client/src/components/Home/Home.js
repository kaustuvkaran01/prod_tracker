import React,{ useEffect } from 'react';
// import NavbarComponent from '../Navbar/index';
import Left from './Left/index';
import Right from './Right/index';
import styled from 'styled-components';
// import { auth } from '../../config/firebase';
// import { useHistory } from 'react-router-dom';

function Home() {
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) history.push("/auth");
  //   });
  // });

  // const history = useHistory();

  // const logOut = () =>{
  //   auth
  //     .signOut()
  //     .then((res) => {
  //       history.push("/auth");
  //       //do something else with res
  //     })
  //     .catch((err) => {
  //       //do something else with err
  //     });
  // }

  return (
    <HomeContainer>
      <div className="left">
        <Left />
      </div>
      <div className="right">
        <Right />
      </div>
      {/* <div>
        <button onClick={logOut}>Log out</button>
      </div> */}
    </HomeContainer>
  );
}
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap:3rem;
  margin-top: 4rem;
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