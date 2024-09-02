import React from "react";
import './App.css';
import { FaUserLarge } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

function Nav(){
    return(
        <div id="nav">
            <header className="header">
                <div id="menu">
            <IoMenuSharp />
            </div>
            <div className="logo">
            <FaYoutube />
            </div >
            <div id="name">
            <span style={{color:"red",paddingBottom:"50px",paddingLeft:"10px",fontSize:"30px"}}>YOU TUBE</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className="user-options" id="user">
            <FaUserLarge />
            </div>
        </header> 
        </div>
    )
}
export default Nav;