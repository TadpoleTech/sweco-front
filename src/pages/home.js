import "../styles/home.css";
import React from "react";
import Menu from "../components/menu";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <span>logo</span>
        <span>Searchbar</span>
        <Menu/>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default Home;
