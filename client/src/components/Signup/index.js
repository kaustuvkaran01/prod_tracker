import React, { Component } from 'react';
import styled from 'styled-components';

class Signup extends Component {
    state = {
        email:'',
        password:'',
    }
  render(){return (
    <SignupContainer>
        This is the Signup form
    </SignupContainer>
  );}
}
export default Signup;


const SignupContainer = styled.div`
    display:flex;
`;