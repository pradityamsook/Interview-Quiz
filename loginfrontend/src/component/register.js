import { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

export default function Register({ register, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleRegister = () => {
    register(username, password, firstname, lastname);
  };

  return (
    <form>
      <Typography variant="h5" style={{ marginBottom: 8 }}>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        className="form-input"
        fullwidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <TextField
        label="Password"
        variant="outlined"
        className="form-input"
        fullwidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <TextField
        label="First name"
        variant="outlined"
        className="form-input"
        fullwidth
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br/>
      <TextField
        label="Last name"
        variant="outlined"
        className="form-input"
        fullwidth
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <br/>
      <Button variant="contained" color="primary" fullwidth size="large" onClick={() => handleRegister()}>register</Button>
      <Button variant="contained" color="default" fullwidth size="large" onClick={() => setIsLogin(true)}>login</Button>
    </form>
  );
}
