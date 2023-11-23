import { useState } from 'react'
import axios from "axios"

function LoginForm(props) {

  const [state, setState] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  function sendLoginRequest(event) {
    event.preventDefault();

    axios
      .post('/login', {
        'username': state.username,
        'password': state.password
      })
      .then((response) => {
        console.log(response);
        props.setAuthUser({
          username: response.data.user.username,
          email: response.data.user.email,
          token: response.data.token
        });
      })
      .catch((err) => console.log(err))
  }

  return <>
    <br /><br />
    <div className="container">
      <h1>Login</h1>
      <br />
      <form onSubmit={sendLoginRequest}>
        <div className="mb-3">
          <input type="text" className="form-control" name="username" value={state.username} onChange={handleChange} placeholder="Insert your username" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" name="password" value={state.password} onChange={handleChange} placeholder="Insert your password" />
        </div>
        <button type="submit" className="btn btn-secondary">Login</button>
      </form>
    </div>
    <br /><br />
  </>
}

export default LoginForm