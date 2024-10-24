import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    axios.post("http://localhost:4041/login");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Log In</button>
    </>
  );
}
