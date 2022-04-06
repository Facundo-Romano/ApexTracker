import React, { useState } from "react";
import useAuth from "../../customHooks/useAuth.js";
import legends from "../../media/legends/exportLegends.js";

export default function Register() {
  const [userRegister, setUserRegister] = useState({ email: "", password: "", name: "", main: "Ash" });
  const { register } = useAuth();
  const [main, setMain] = useState(legends[0]);
  const legendsName = ["Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", 
  "Loba", "MadMaggie", "Mirage", "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson", "Wraith"];

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const property in userRegister) {
        if (userRegister[property] === "") return
    }
    register({ ...userRegister })
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
    userRegister[name] = input;
    setUserRegister({ ...userRegister });
  };

  const handleSelect = (e) => {
      const index = e.target.value;
      setMain(legends[index]);
      setUserRegister({ ...userRegister, main: legendsName[index] });
  };

  return (
      <div>
            <h1>Sign Up</h1>
            <img src={main} alt="Not loading"/>
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
  );
}