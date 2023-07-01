import React, { useState } from "react";
import Post from "../src/components/Post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "pantrinibostonchick",
      caption: "Wow, I'm Amazing!",
      imageURL:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "gnadesignz",
      caption: "honestly im him",
      imageURL:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-header-wrapper">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="IG Original Logo"
          />
          <button className="text-button">Logout</button>
          <div className="app-header-buttons">
            <button className="primary-button">Log In</button>
            <button className="text-button">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageURL={post.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
