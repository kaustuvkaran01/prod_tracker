import React, { useEffect } from "react";
// import NavbarComponent from '../Navbar/index';
import Left from "../components/Home/Left";
import Right from "../components/Home/Right";
// import styled from "styled-components";
// import { auth } from '../../config/firebase';
// import { useHistory } from 'react-router-dom';

function Home() {
  return (
      <div className="w-4/5 mx-auto flex lg:flex-row flex-col justify-evenly items-center">
        <Left />
        <Right />
      </div>
  );
}
export default Home;
