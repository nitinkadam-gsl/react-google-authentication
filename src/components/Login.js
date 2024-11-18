import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
  return (
    <div className='container'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log("🚀 ~ Login ~ credentialResponse 2:", credentialResponse)
          const decoded = jwtDecode(credentialResponse.credential);
          console.log("🚀 ~ Login ~ decoded:", decoded)
          if (['gslab.com', 'gmail.com'].includes(decoded.hd)) {
            console.log('User authenticated with GSLab or Gmail');
            return window.location.href;
          }
          const queryString = new URLSearchParams(credentialResponse).toString();
          window.location.replace(`http://172.25.12.211:8080/ruleeditor-0.0.1-SNAPSHOT?${queryString}`);
        }}
        onError={err => {
          console.log("🚀 ~ Login ~ err:", err)
          console.log('Login Failed');
        }}
      />;
    </div>
  );
}

export default Login;
