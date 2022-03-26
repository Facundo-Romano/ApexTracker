import React from 'react';
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.bigContainer}>
            <div className={styles.upperContainer}>
                <NavLink to="/" className={styles.logo}>
                    Logo
                </NavLink>
                <SearchBar />
                <div className={styles.navLinks}>
                    <NavLink to="/login" className={styles.logIn}>
                        Log In 
                    </NavLink>
                    <NavLink to="/register" className={styles.register}>
                        Register
                    </NavLink> 
                    <NavLink to="/under-construction" className={styles.user}>
                        User
                    </NavLink>
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
        </div>
    )
};



export default Navbar;