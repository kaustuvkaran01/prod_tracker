import React, { useState, Component } from "react";
import styled from "styled-components";
import Card from "../generic/Card";
import logo from "../../images/logo.svg";
// import { app } from '../../config/firebase


function Right() {
  const [Count,setCount] = useState(0);
  const cards = [
    {
      title: "Sleeping",
      count:{Count}
    },
    {
      title: "Workout",
      count:{Count}
    },
    {
      title: "Authentic Cliche Forage",
      count:{Count}
    },
    {
      title: "Authentic Cliche Forage",
      count:{Count}
    },
    {
      title: "Authentic Cliche Forage",
      count:{Count}
    },
  ];
  return (


    <div class="p-2 pl-10 w-full md:w-3/5 flex flex-col gap-2 justify-center item-center ">
      <img className="h-40" src={logo} />
      {cards.map((card) => {
        return (
          <div class="bg-gray-100 rounded flex p-4 h-1/7 justify-between items-center lg:w-3/4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
              >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <div className="flex flex-row justify-evenly gap-4">
              <span class="title-font font-medium">
                {card.title}
              </span>
              <button onClick={()=>{setCount(Count + 1)}}>
                Up
              </button>
              <button onClick={()=>{setCount(Count-1)}}>
                Down
              </button>
              <span class="title-font font-medium">{Count}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Right;
