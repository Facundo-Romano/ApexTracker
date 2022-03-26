import React, { useState } from "react";
import useAuth from "../../customHooks/useAuth.js";
/* import legends from "../../media/legends/exportLegends.js"; */

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const { login } = useAuth();
  /* const [main, setMain] = useState(legends[0]);
  const legendsStr = ["Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", 
  "Loba", "MadMaggie", "Mirage", "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson", "Wraith"]; */

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...userLogin })
    .then((res) => {
        if (res.status ===  "ok") {
            console.log(res.payload)
        } else {
            console.log(res.payload)
        }
    }/* closeModal() */);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const name = e.target.name;
    userLogin[name] = input;
    setUserLogin({ ...userLogin });
  };

  /* const handleSelect = (e) => {
      const index = e.target.value;
      setMain(legends[index]);
  }; */

  return (
      <div>
            <h1>Sign In</h1>
            {/* <img src={main} alt="Not loading"/> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" onChange={handleChange} defaultValue="" type="text"/>
                </div>
                {/* <div>
                    <label htmlFor="mainS">Main</label>
                    <select name="main" onChange={handleSelect}>
                        {legendsStr.map((legend, i) => (
                            <option value={i} key={i}>{legend}</option>
                        ))}
                    </select>
                </div> */}
                <button type='submit'>Sign In</button>
            </form>
      </div>
  );
}
