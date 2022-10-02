

import React, { useEffect, useRef, useState } from 'react';

const serverURL = 'http://localhost:3001'

function LoginView({ login, userId }) {
  const divRef = useRef(null);

  useEffect(() => {
    // check from server if the user already signed in?

    // if not do below vv

    // eslint-disable-next-line no-undef
    window.google.accounts.id.initialize({
      client_id: '143714965385-rruq4eamet32hpn61alm2913qgbfed0o.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });
    // eslint-disable-next-line no-undef
    window.google.accounts.id.renderButton(divRef.current, {
      theme: 'filled_blue',
      size: 'medium',
      type: 'standard',
      text: 'continue_with',
    });

    // // eslint-disable-next-line no-undef
    // google.accounts.id.prompt();

    // else set user id to returned id
  }, [])

  const handleCredentialResponse = (response) => {
    console.log('success');
    login('blblba');
  }

  return (
    <div className="App">
      {!userId && <div id="parent" ref={divRef}></div>}
      {userId && <div>{userId}</div>}
    </div>
  );
}

export default LoginView;
