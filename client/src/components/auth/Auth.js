import React, { useState, useEffect } from 'react'
import Signin from './Signin/index';
import Signup from './Signup/index';
import { auth } from '../../config/firebase';
// import { useHistory } from 'react-router-dom';
import history from '../../services/history';

function Auth() {
    // const history = useHistory();
    const [authType, setAuthType] = useState('signin');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/home')
        })
    }, [])

    return (
      <div className="auth">
        {authType === "signin" ? (
          <div className="container">
            <Signin />
            <p>
              New here?{" "}
              <span onClick={() => setAuthType("signup")}>Create account.</span>
            </p>
          </div>
        ) : (
          <div className="container">
            <Signup />
            <p>
              Have an account?{" "}
              <span onClick={() => setAuthType("signin")}>Sign In.</span>
            </p>
          </div>
        )}
      </div>
    );
}

export default Auth