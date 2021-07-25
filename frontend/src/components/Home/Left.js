import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Cards from "../generic/Card";
import Boxes from "../generic/Boxes";
import {FaDumbbell,FaMoneyBill,FaRocket,FaNewspaper} from 'react-icons/fa'
// import design from '../images/design.png';
// import svg1 from '../../../images/react-svg.svg';

const boxes = [
  {
    heading: "Motivation",
    subheading: "Your daily dose of motivation",
    link: "/motivation",
    "icon":<FaRocket/>
    // svg1:'../../../images/react-svg.svg'
  },
  {
    heading: "Workout",
    subheading: "Your daily dose of workout",
    // svg1:'../../../images/react-svg.svg',
    link: "/workout",
    "icon":<FaDumbbell/>
  },
  {
    heading: "Latest News",
    subheading: "Your daily dose of drama",
    // svg1:'../../../images/react-svg.svg',
    link: "/news",
    "icon":<FaNewspaper/>
  },
  {
    heading: "Investing and Finance",
    subheading: "Your daily dose of random",
    // svg1:'../../../images/react-svg.svg',
    link: "/something",
    "icon":<FaMoneyBill/>
  },
];
function Left() {
  return (
    <div class="m-2 w-full border-b-2 lg:border-b-0 lg:border-r-2">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex flex-wrap justify-evenly gap-8 left">
              {boxes.map(box => {
                return(
              <div class="md:fit-content md:w-2/5">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      {box.icon}
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      {box.heading}
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      {box.subheading}
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// <LeftContainer>
//   <div className="quote">
//     <p className="quote-text">
//       "Start where you are, do what you can, use what you have."
//     </p>
//     <div className="design">
//       {/* This is where the design comes in */}
//       <img src={design}/>
//     </div>
//   </div>
//   <div className="boxes">
//     <p>Additional Resources</p>
//     <div className="boxes-div">
//       {boxes.map(box => {
//         return(<NavLink to={box.link}><Boxes heading={box.heading} subheading={box.subheading}/></NavLink>);
//       })}
//     </div>
//   </div>
// </LeftContainer>
export default Left;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 50%;
  border-radius: 24px;
  background: #edf2fc;
  height: 90vh;
  align-items: center;
  justify-content: center;
  .quote {
    display: flex;
    height: 10rem;
    width: 40rem;
    background: #16056d;
    border-radius: 24px;
    align-items: center;
    justify-content: space-between;
  }
  .quote-text {
    text-align: right;
    font-size: x-large;
    font-family: "Poppins";
    color: white;
    width: 20rem;
  }
  .design img {
    height: 10rem;
    border-radius: 0 24px 24px 0;
  }
  .boxes {
    // margin: 3rem;
    align-self: center;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
    background: transparent;
    font-weight: 500;
    font-size: x-large;
    color: #292639;
    width: 40rem;
    // border: 1px solid var(--border-yellow);
  }
  .boxes-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 45%;
    gap: 2rem;
    justify-content: space-between;
  }
`;
