import React, { useState } from "react";
import useAuth from "../../customHooks/useAuth.js";

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...userLogin })
    .then((res) => {
        if (res.status ===  "ok") {
            console.log(res.payload)
        } else {
            console.log(res.payload)
        }
    });
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const name = e.target.name;
    userLogin[name] = input;
    setUserLogin({ ...userLogin });
  };

  return (
      <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <button type='submit'>Sign In</button>
            </form>
      </div>
  );
};