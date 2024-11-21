import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
  // return (
  //   <div className='container'>

  //     <GoogleLogin
  //       onSuccess={credentialResponse => {
  //         const decoded = jwtDecode(credentialResponse.credential);
  //         if (!['gslab.com', 'gmail.com'].includes(decoded.hd)) {
  //           return window.location.href;
  //         }
  //         const queryString = new URLSearchParams(credentialResponse).toString();
  //         window.location.replace(`http://172.25.12.211:8080/ruleeditor-0.0.1-SNAPSHOT/login?${queryString}`);
  //       }}
  //       onError={err => {
  //         console.log('Login Failed', err);
  //       }}
  //     />;

  //   </div>
  // );

  return (
    <div class="container">
      <div class="top-content">
        <img src="../images/flipkart-logo.png" alt="Logo" />
        <h2>Sign in</h2><br />
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse.credential);
            if (!['gslab.com', 'gmail.com'].includes(decoded.hd)) {
              return window.location.href;
            }
            const queryString = new URLSearchParams(credentialResponse).toString();
            window.location.replace(`http://172.25.12.211:8080/ruleeditor-0.0.1-SNAPSHOT/login?${queryString}`);
          }}
          onError={err => {
            console.log('Login Failed', err);
          }}
        />
      </div>
    </div>
  );
}

export default Login;
