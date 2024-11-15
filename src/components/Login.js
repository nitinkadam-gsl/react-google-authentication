import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

function Login() {
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log("🚀 ~ Login ~ credentialResponse 1:", credentialResponse)
          document.cookie = "sharedData=" + encodeURIComponent(JSON.stringify(credentialResponse));
          window.location.replace(`http://172.25.12.211:8080/ruleeditor-0.0.1-SNAPSHOT?credential="${JSON.stringify(credentialResponse)}"`);
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
