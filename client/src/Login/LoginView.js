import background from "../assets/images/basketballbg.png";
import React, { useEffect, useRef, useState } from 'react';
import { TextInput, Button, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import RegisterForm from "./RegisterForm.js";
import LoginAlert from "./LoginAlert.js";
const Axios = require('../requests.js');
const Config = require('../config.js');

function LoginView({ setUserId, userId, setPage, setLogin }) {
  const [alerted, setAlert] = useState(false);
  const [opened, setOpened] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.google.accounts.id.initialize({
      client_id: Config.OAUTH_KEY,
      callback: handleCredentialResponse,
      auto_select: true,
    });
    // eslint-disable-next-line no-undef
    window.google.accounts.id.renderButton(document.getElementById("google-button"), {
      size: 'medium',
      type: 'standard',
      shape: 'circle',
      text: 'continue_with'
    });
    // // else set user id to returned id
  }, [alerted])

  // handles sign in with google on the backend
  const handleCredentialResponse = (response) => {
    Axios
    .googleLogin(response)
    .then((res) => {
      console.log(res)
      setUserId(res.data.id)
      setPage('games');
    })
    .catch(error => console.log(error))
  }

  // Sends login credentials to backend, alerts if wrong login
  const handleSubmit = (values) => {
    console.log(values);
    Axios.login(values)
    .then((res) => {
      setUserId(res.data.id);
      setPage('games');
      setLogin(true);
    })
    .catch((err) => {
      setAlert(true);
    })
  }

  // creates a form element using Mantine
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // opens registering modal
  const openRegisterForm = () => {
    setOpened(true);
  }

  return (
    <div style={{backgroundColor:'#16141c'}}>
      <RegisterForm setOpened={setOpened} opened={opened}/>
      <div
        id="LoginView"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        <div id="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: "2"
          }}
        >
          {alerted && <LoginAlert setAlert={setAlert}/>}
          {!alerted && (
            <>
            <div id="google-button" ref={divRef}></div>
            <span style={{margin: '10px'}}>OR</span>
            <form
              id='myform'
              style={{
                width: "100%",
                textAlign: "center"
              }}
              onSubmit={form.onSubmit((values) => handleSubmit(values))}
            >
              <TextInput
                placeholder="your@email.com"
                styles={(theme) => ({
                  root: {
                    width: '100%'
                  }
                })}
                {...form.getInputProps('email')}
              />
              <PasswordInput
                placeholder="password"
                styles={(theme) => ({
                  root: {
                    marginTop: '20px',
                    width: '100%'
                  }
                })}
                {...form.getInputProps('password')}
              />
              <Button
                type='submit'
                styles={(theme) => ({
                  root: {
                    marginTop: '20px',
                    marginBottom: '20px',
                    backgroundColor: '#0d5f65',
                }})}
              >
                Sign In
              </Button>
            </form>
            <small
              style={{color: 'white'}}
            >
              Don't have an account?
              <small
              onClick={openRegisterForm}
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              >
                Register here
              </small>
            </small>
            </>
          )}
        <img
          alt="ball"
          src={background}
          style={{
            opacity:'0.5',
            position: 'absolute',
            top: '-40%',
            zIndex: '-1'
          }}
        />
        </div>
      </div>
    </div>
  );
}

export { LoginView };
