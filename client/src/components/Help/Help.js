import React from 'react';
import NavbarComponent from '../Navbar/index';
import styled from 'styled-components';

function Help() {
  return (
    <HelpContainer>
        <NavbarComponent />
        <div className="help-container">
          <p>This is the help container</p>
        </div>
    </HelpContainer>
  );
}

export default Help;

const HelpContainer = styled.div`
  .help-container{
    padding-top: 5rem;
    color: black;
  }
`;