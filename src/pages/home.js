import "../styles/home.css";
import React, { useState } from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";
import Sidebar from "../components/sidebar";
import Post from "../components/post";

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("helsinki");
  const [selectedSubArea, setSelectedSubArea] = useState(null);
  return (
    <div className="home">
      <main>
      <header className="header">
        <span>logo</span>
        <SearchBar
          city={selectedCity}
          onCityChange={setSelectedCity}
          subArea={selectedSubArea}
          onSubAreaChange={setSelectedSubArea}
        />
        <Menu isOpen={menuIsOpen} updateMenu={setMenuIsOpen}/>
      </header>
      <div className="content">
        <Post post={{ title: "Sorsa", location: "Helsinki", score: 0 }} />
      </div>
      </main>
      {menuIsOpen && <Sidebar />}
    </div>
  );
}

export default Home;
