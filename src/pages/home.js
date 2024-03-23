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

  const constructPost = (post, i) => {
    return (
      <Post
        post={{
          title: post.header,
          location: `${post.city}, ${post.suburb}`,
          score: 0,
          image: `/imgs/${(i % 5) + 1}.jpeg`,
        }}
      />
    );
  }

  useEffect(() => {
    if (selectedSubArea) {
      api.getPostsInSuburb(selectedCity, selectedSubArea).then((posts) => {
        setPosts(
          Object.values(posts).map((post, i) => (
            constructPost(post, i)
          )),
        );
      });
    } else if (selectedCity) {
      api.getPostsInCity(selectedCity).then((posts) => {
        setPosts(
          Object.values(posts).map((post, i) => (
            constructPost(post, i)
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
            height: "80px",
            padding: "15px",
          }} src="/imgs/logo.png"></img>
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
