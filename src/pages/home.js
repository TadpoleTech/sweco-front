import "../styles/home.css";
import React, { useState } from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";
import Sidebar from "../components/sidebar";

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <div className="home">
      <main>
      <header className="header">
        <span>logo</span>
        <SearchBar/>
        <Menu isOpen={menuIsOpen} updateMenu={setMenuIsOpen}/>
      </header>
      <div className="content"></div>
      </main>
      {menuIsOpen && <Sidebar />}
    </div>
  );
}

export default Home;
