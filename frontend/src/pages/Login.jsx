import { useState, useEffect } from 'react'
import axios from "axios"

import LoginForm from '../components/LoginForm'

function Login(props) {
  if (props.authUser.token === "") {
    return <>
      <LoginForm setAuthUser={props.setAuthUser} />
    </>
  }

  return <>
    <div className='container m-4'>
      <h1>Already logged in as:</h1>
      <h2>{props.authUser.username}</h2>
    </div>
  </>
}

export default Login