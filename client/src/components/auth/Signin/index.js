import React,{ useState } from 'react';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";
import { Link } from 'react-router-dom';
import { auth } from '../../../config/firebase';
// import { useHistory } from 'react-router-dom';
import history from '../../../services/history';

function Signin(){
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signin = () => {
    auth.signInWithEmailAndPassword(email,password).then(res => {
      history.push('/home');
    }).catch(err => {
        console.log(err);
    })
  }

  return (
    <div className="signin">
      <h1>Sign in to you account</h1>
      <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)}/>
      <button onClick={signin}>Sign In</button>
    </div>
  );
}

export default Signin;