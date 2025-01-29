//index.js
import React, { useState } from "react";
import "./style/style.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {

  const [posts, setPosts] = useState([]); // Array to hold posts

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  
  return (
    <div className="App">
      <PostForm create ={createPost}/>
      <PostList posts={posts} title={"Java"}/>
    </div>
  )
}
