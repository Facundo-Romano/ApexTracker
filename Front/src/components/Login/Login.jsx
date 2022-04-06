import React, { useState } from "react";
import ReactDom from "react-dom";
import useAuth from "../../customHooks/useAuth.js";
import styles from "./Login.module.css";

export default function Login({ isOpen, closeModal }) {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const { login } = useAuth();

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...userLogin })
    .then((res) => {
        if (res.status ===  "ok") {
            closeModal()
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

  return ReactDom.createPortal(
    <>
        <div className={styles.background}/>
        <div className={styles.modal}>
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
            <button onClick={() => closeModal()}>X</button>
        </div>
    </>,
    document.getElementById("portal")
  );
};