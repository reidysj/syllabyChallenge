import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function confirmPasswords() {
    if (userData.password === userData.passwordConfirm)
      return { username: userData.username, password: userData.password };
    else return false;
  }

  function handleSubmit() {
    const userData = confirmPasswords();
    if (userData) {
      axios
        .post("http://localhost:4041/auth/register", userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
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
      <input
        type="password"
        placeholder="Confirm Password"
        name="passwordConfirm"
        value={userData.passwordConfirm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Log In</button>
    </>
  );
}
