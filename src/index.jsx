import React from 'react';
import ReactDOM from 'react-dom';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={`${process.env.REACT_APP_SITE_KEY}`}>
      <GoogleReCaptcha
        onVerify={(token) => localStorage.setItem('token', token)}
      />
    </GoogleReCaptchaProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
