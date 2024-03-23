import React from "react";

function CreatePost() {
    return (
        <div>
          <h1>Create New Post</h1>
          <form>
            <input type="text" placeholder="Subject" /><br/>
            <button>Submit Post</button>
          </form>
        </div>
    );
};

export default CreatePost;
