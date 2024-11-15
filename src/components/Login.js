import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

function Login() {
  return (
    <div>
      <GoogleLogin
        hd={['gslab.com']}
        onSuccess={credentialResponse => {
          console.log("🚀 ~ Login ~ credentialResponse 2:", credentialResponse)
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
