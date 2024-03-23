import "../styles/home.css";
import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import SearchBar from "../components/areaSearch";
import Sidebar from "../components/sidebar";
import Post from "../components/post";
import CreateButton from "../components/createButton";

import * as api from "../api";

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("helsinki");
  const [selectedSubArea, setSelectedSubArea] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (selectedSubArea) {
      api.getPostsInSuburb(selectedCity, selectedSubArea).then((posts) => {
        setPosts(
          Object.values(posts).map((post) => (
            <Post
              post={{ title: post.header, location: "Helsinki", score: 0, image: "https://via.placeholder.com/150"}}
            />
          )),
        );
      });
    } else if (selectedCity) {
      api.getPostsInCity(selectedCity).then((posts) => {
        setPosts(
          Object.values(posts).map((post, i) => (
            <Post
              post={{ title: post.header, location: "Helsinki", score: 0, image: `/neko/${i+1}.png`}}
            />
          )),
        );
      });
    }
  }, [selectedCity, selectedSubArea]);

  return (
    <div className="home">
      <CreateButton />
      <main>
        <header className="header">
          <img style={{
            height: "150px",
          }} src="/neko/logo.jpg"></img>
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
