import "../styles/home.css";
import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";
import Sidebar from "../components/sidebar";
import Post from "../components/post";

import * as api from "../api";

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("helsinki");
  const [selectedSubArea, setSelectedSubArea] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.getAllBoards().then((posts) => {
      setPosts(
        posts.map((post) => (
          <Post post={{ title: post.header, location: "Helsinki", score: 0 }} />
        )),
      );
    });
  }, []);

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
          <Menu isOpen={menuIsOpen} updateMenu={setMenuIsOpen} />
        </header>
        <div className="content">{posts}</div>
      </main>
      {menuIsOpen && <Sidebar />}
    </div>
  );
}

export default Home;
