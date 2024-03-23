import "./App.css"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import Profile from "./pages/profile"
import YourPosts from "./pages/yourPosts";
import YourInformation from "./pages/yourInformation";
import YourVotedPosts from "./pages/yourVotedPosts";
import Map from "./pages/map";
import CreatePost from "./pages/createPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/yourposts" element={<YourPosts />} />
        <Route path="/yourinformation" element={<YourInformation />} />
        <Route path="/yourvotedposts" element={<YourVotedPosts />} />
        <Route path="/map" element={<Map />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
