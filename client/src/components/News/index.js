import React from 'react';
import styled from 'styled-components';
import NavbarComponent from '../Navbar/index';

function News() {
  return (
    <NewsContainer>
        <NavbarComponent />
      <div className="main-container">
        <p>This is the news container</p>
      </div>
    </NewsContainer>
  );
}
export default News;

const NewsContainer = styled.div`

    .main-container{
        padding-top: 5rem;
        color:black;
    }

`;