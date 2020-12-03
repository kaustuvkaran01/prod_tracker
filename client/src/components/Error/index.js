import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function ErrorPage() {
  return (
    <ErrorContainer>
      This is the Error 404 page;
      <NavLink to="/home">
        <button class="btn btn-primary btn-large">Let's Go Back shall we?</button>
      </NavLink>
    </ErrorContainer>
  );
}
export default ErrorPage;

const ErrorContainer = styled.div`

    background:yellow;
    color:black;
    font-family: Ubuntu;
    font-size:xxx-large;
`;