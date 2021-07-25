import React from 'react';
import NavbarComponent from '../components/generic/Navbar';
import styled from 'styled-components';
// import './styles.css'
import NewsCards from '../components/generic/NewsCard';
import { AnimateSharedLayout } from "framer-motion"
// import icon1 from '../../images/sleep.webp';

export default function News() {
  return (
    <WorkoutContainer>
      <div className="section">
        <h1>Latest News:</h1>
        <NewsCards
          heading="Farm Protests"
          subheading="The talks between the government and farmer's union remained inconclusive on Tuesday"
        />
        <NewsCards
          heading="Farm Protests"
          subheading="The talks between the government and farmer's union remained inconclusive on Tuesday"
        />
        <NewsCards
          heading="Farm Protests"
          subheading="The talks between the government and farmer's union remained inconclusive on Tuesday"
        />
        <NewsCards
          heading="Farm Protests"
          subheading="The talks between the government and farmer's union remained inconclusive on Tuesday"
        />
      </div>
      <div className="section">
        <h1>&nbsp;</h1>
        <NewsCards
          heading="GHMC Results declared"
          subheading="The results for 149 of 150 seats of Greater Hyderabad Municipal Corporation (GHMC) have been declared, with TRS winning 55 seats, BJP recording a victory in 48 seats and AIMIM in 44 seats. "
        />
        <NewsCards
          heading="GHMC Results declared"
          subheading="The results for 149 of 150 seats of Greater Hyderabad Municipal Corporation (GHMC) have been declared, with TRS winning 55 seats, BJP recording a victory in 48 seats and AIMIM in 44 seats. "
        />
        <NewsCards
          heading="GHMC Results declared"
          subheading="The results for 149 of 150 seats of Greater Hyderabad Municipal Corporation (GHMC) have been declared, with TRS winning 55 seats, BJP recording a victory in 48 seats and AIMIM in 44 seats. "
        />
        <NewsCards
          heading="GHMC Results declared"
          subheading="The results for 149 of 150 seats of Greater Hyderabad Municipal Corporation (GHMC) have been declared, with TRS winning 55 seats, BJP recording a victory in 48 seats and AIMIM in 44 seats. "
        />
      </div>
      <div className="section">
        {/* <h1>Legs</h1> */}
        <h1>&nbsp;</h1>
        <NewsCards
          heading="25 Yr Old UP Jeweller sets record"
          subheading="Harshit Bansal has set the world record for most diamonds in a ring with 12,638 diamonds on a single ring."
        />
        <NewsCards
          heading="25 Yr Old UP Jeweller sets record"
          subheading="Harshit Bansal has set the world record for most diamonds in a ring with 12,638 diamonds on a single ring."
        />
        <NewsCards
          heading="25 Yr Old UP Jeweller sets record"
          subheading="Harshit Bansal has set the world record for most diamonds in a ring with 12,638 diamonds on a single ring."
        />
        <NewsCards
          heading="25 Yr Old UP Jeweller sets record"
          subheading="Harshit Bansal has set the world record for most diamonds in a ring with 12,638 diamonds on a single ring."
        />
      </div>
    </WorkoutContainer>
  );
}

const WorkoutContainer = styled.div`
  background: var(--light-blue);
  margin-top:3.5rem;
  display:flex;
  flex-direction:row;
  gap:24px;
  justify-content:space-evenly;
  .section{
    display:flex;
    flex-direction: column;
    height:90vh;
    width:25vw;
    // background:orangered;
    align-items:center;
    gap:1rem;
  }

`;