import { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

export default function Login({ login, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let loggined = login(username, password);
    if (loggined) {
        console.log("Logged in.")
    }
  };

  return (
    <form>
      <Typography variant="h3" style={{ marginBottom: 8 }}>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullwidth
        className="form-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <TextField
        label="Password"
        variant="outlined"
        fullwidth
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>
      <Button variant="contained" color="primary" fullwidth size="large" onClick={() => handleLogin()}>
        login
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        full width
        size="large"
        onClick={() => setIsLogin(false)}
      >
        register
      </Button>
    </form>
  );
}
