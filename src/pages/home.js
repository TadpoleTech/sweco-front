import "../styles/home.css";
import React from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <span>logo</span>
        <SearchBar/>
        <Menu/>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default Home;
