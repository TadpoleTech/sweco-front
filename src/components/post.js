import "../styles/post.css";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-title">{post.title}</span>
      </div>
      <div className="post-footer">
        <p className="post-location">{post.location}</p>
      </div>
    </div>
  );
};

export default Post;
