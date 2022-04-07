import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from 'react-router-dom';
import useAuth from "../../customHooks/useAuth.js";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

const Navbar = () => {
    const { logout, user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <div className={styles.bigContainer}>
            <div className={styles.upperContainer}>
                <NavLink to="/" className={styles.logo}>
                    Logo
                </NavLink>
                <SearchBar />
                <div className={styles.navLinks}>
                    {user.id === -1 ? <button onClick={() => setIsLoginOpen(true)}>Log In</button> : 
                    <NavLink to="/under-construction" className={styles.user}>
                        User
                    </NavLink>}
                    {user.id === -1 ? <button onClick={() => setIsRegisterOpen(true)}>Register</button> : 
                    <button onClick={() => logout()}>Log Out</button>}
                </div> 
            </div>
            <div className={styles.lowerContainer}>
                <NavLink to="/" className={styles.home}>
                    Home
                </NavLink>
                <NavLink to="/under-construction" className={styles.news}>
                    News
                </NavLink>
                <NavLink to="/under-construction" className={styles.statistics}>
                    Statistics
                </NavLink> 
                <NavLink to="/new-match" className={styles.addMatch}>
                    Add Match
                </NavLink>
            </div>
            <Login isOpen={isLoginOpen} closeModal={() => setIsLoginOpen(false)}></Login>
            <Register isOpen={isRegisterOpen} closeModal={() => setIsRegisterOpen(false)}></Register>
        </div>
    )
};



export default Navbar;