import React,{ Component } from 'react';
import styled from 'styled-components';

class Signin extends Component {
    state = {
        email:'',
        password:'',
    }
  render(){return (
    <SigninContainer>
        This is the Signin form
    </SigninContainer>
  );}
}
export default Signin;


const SigninContainer = styled.div`
    display:flex;
`;