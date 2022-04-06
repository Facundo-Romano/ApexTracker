import React, { useState } from "react";
import ReactDom from "react-dom";
import useAuth from "../../customHooks/useAuth.js";
import legends from "../../media/legends/exportLegends.js";
import styles from "./Register.module.css";
import RegistrationApproved from "./RegistrationApproved.jsx";

export default function Register({ isOpen, closeModal }) {
  const [userRegister, setUserRegister] = useState({ email: "", password: "", name: "", main: "Ash" });
  const { register } = useAuth();
  const [main, setMain] = useState(legends[0]);
  const legendsName = ["Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", 
  "Loba", "MadMaggie", "Mirage", "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson", "Wraith"];
  const [approved, isApproved] = useState(false);

  if (!isOpen) return null
  if (approved) return <RegistrationApproved resetApproved={() => isApproved(false)} closeModal={() => closeModal()}/>

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const property in userRegister) {
        if (userRegister[property] === "") return
    }
    register({ ...userRegister })
    .then((res) => {
        if (res.status ===  "ok") {
            isApproved(true)
        } else {
            console.log(res.payload)
        }
    });
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const name = e.target.name;
    userRegister[name] = input;
    setUserRegister({ ...userRegister });
  };

  const handleSelect = (e) => {
      const index = e.target.value;
      setMain(legends[index]);
      setUserRegister({ ...userRegister, main: legendsName[index] });
  };

  return ReactDom.createPortal(
      <>
        <div className={styles.background}/>
        <div className={styles.modal}>
            <h1>Sign Up</h1>
            <div className={styles.container}>
            <img src={main} alt="Not loading" className={styles.img}/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <div>
                    <label htmlFor="main">Main</label>
                    <select name="main" onChange={handleSelect}>
                        {legendsName.map((legend, i) => (
                            <option value={i} key={i}>{legend}</option>
                        ))}
                    </select>
                </div> 
                <button type='submit'>Sign Up</button>
            </form>
            </div>
            <button onClick={() => closeModal()}>X</button>
        </div>
      </>,
    document.getElementById("portal")
  )
};