// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Login from "./component/login";
import Register from "./component/register";
import { Container } from "@material-ui/core";

export default function App() {
  const [token, setToken] = useState(null);
  const logout = () => {
    setToken(null);
  };
  return (
    <div className="App">
      {!token ? (
        <NoAuth setToken={setToken} />
      ) : (
        <Container fixed>
          login success !<button onClick={() => logout()}>Logout</button>
        </Container>
      )}
    </div>
  );
}

function NoAuth({ setToken }) {
  const [isLogin, setIsLogin] = useState(true);

  // Login method
  const login = (username, password) => {
    const apiUrl = "http://127.0.0.1:8000/auth/";
    let credentials = {
      username: username,
      password: password,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        setToken(data.token);
      })
      .catch((error) => console.error(error));
  };

  // Register method
  const register = (username, password, firstname, lastname) => {
    const apiUrl = "http://127.0.0.1:8000/api/users/";
    let credentials = {
      username: username,
      password: password,
      first_name: firstname,
      last_name: lastname,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.token);
        setToken(data.token);
      })
      .catch((error) => console.error(error));
  };

  // Profile method
  const profile = (firstname, lastname) => {
    const apiUrl = "http://127.0.0.1:8000/api/users/";
    let credentials = {
      first_name: firstname,
      last_name: lastname,
    };

    fetch(apiUrl, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.token);
        setToken(data.token);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {isLogin ? (
        <Login login={login} setIsLogin={setIsLogin} />
      ) : (
        <Register register={register} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}
