import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav';
import SideMenu from './sidemenu';
import VideoGrid from './videoitem';
import FilterBar from './filterbar';
function Result(){
  return(
    <div>
      <Nav/>
      <SideMenu/>
      <FilterBar/>
      <VideoGrid/>
    </div>
  )
}
ReactDOM.render(<Result/>,document.getElementById("root"));