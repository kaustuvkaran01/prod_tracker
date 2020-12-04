import React,{ useState } from 'react';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";
import { Link } from 'react-router-dom';
import { auth } from '../../../config/firebase';
// import { useHistory } from 'react-router-dom';
import history from '../../../services/history';

function Signup(){
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signup = () => {
    auth.createUserWithEmailAndPassword(email,password).then(res => {
      history.pushState('/home');
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="signup">
      <h1>Sign in to you account</h1>
      <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
      <input type='password' placeholder='Enter your password' onChange={e=>setPassword(e.currentTarget.value)}/>
      <button onClick={signup}>Sign Up</button>
    </div>
  );
}

export default Signup;