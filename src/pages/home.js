import "../styles/home.css";
import React, { useState } from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="home">
      <header className="header">
        <span>logo</span>
        <SearchBar/>
        <Menu isOpen={menuIsOpen} updateMenu={setMenuIsOpen}/>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default Home;
