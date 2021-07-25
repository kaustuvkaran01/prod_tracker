import React from 'react';
import styled from 'styled-components';
import icon1 from '../../images/sleep.webp';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Cards({ user_id,id,name,count }) {
  const percentage = Math.ceil({count}/30);
  return (
    <div>

    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
