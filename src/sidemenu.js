import React from 'react';
// import './SideMenu.css';
import './App.css';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";

function SideMenu() {
    return (
        <nav className="side-menu">
            <ul>
            <FaHome />
            <SiYoutubeshorts />
            <MdSubscriptions />
            <RiPlayList2Fill />
            </ul>
        </nav>
    );
}

export default SideMenu;