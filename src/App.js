//index.js
import React, { useMemo, useState } from "react";
import "./style/style.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

export default function App() {
  // State variables
  const [posts, setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'', query:''});


  // Sorted posts to display and we useMemo to avoid re-rendering
  const sortedPosts = useMemo(() => {
    console.log('Function getSortedPosts called');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  },[filter.sort, posts]);

  // Search posts to display and we useMemo to avoid re-rendering and send sortedPosts to make PostList sorting list by selectSort
  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  // Function to create a new post we send to PostForm component
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Function to remove a post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={"React APP 3 hours!"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}
