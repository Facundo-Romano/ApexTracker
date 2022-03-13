import React from 'react';
import Styles from "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    logo
                </div>
                <SearchBar />
                <div>
                    log in and register / User
                </div> 
            </div>
            Navlinks: Home, Statistics, Add Match
            <div>

            </div>
        </div>
    )
};



export default Navbar;