import React from 'react';
import styled from 'styled-components';
import Cards from '../../Card/index';

export default function MainPage() {
  return (
    <MainPageContainer>
        <Cards col="#fff" type="Sleep" sessions="34" totalsessions="40"/>
        <Cards col="red" type="Reading" sessions="35" totalsessions="40"/>
        <Cards col="white" type="Workout" sessions="36" totalsessions="40"/>
        <Cards col="blue" type="Meditation" sessions="37" totalsessions="40"/>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
    display: flex;
    // background: #6600ff;
    background: #A521DA;
    height:100%;
    width:100%;
    color: #FF414D;
    // color: #B83B5E;
    justify-content: center;

`;