//index.js
import React, { useState } from "react";
import "./style/style.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

export default function App() {

  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create ={createPost}/>
      <hr style={{margin:'15px 0 '}}/>
      <div>
        <MySelect
        defaultValue="Sort by"
        options ={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]}/>
      </div>
      {posts.length ? <PostList remove={removePost} posts={posts} title={"React APP 3 hours!"}/> : <h1 style={{textAlign:"center"}}>No posts</h1>}
    </div>
  )
}
